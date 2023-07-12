// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

import "./Property.sol";

///@author kashif ghafoor
///@notice A factory contract, that creates new properties contracts and keeps track of them
contract PropertyFactory {
    address[] public properties;

    address public company; // Company's address that will validate data and estimate price

    enum ValidationStatus {
        pending,
        invalidated,
        priceSuggested,
        priceAccepted
    }

    struct PropertyRequest {
        uint id;
        string _address;
        string _apiId;
        uint _supply;
        uint price;
        address owner;
        ValidationStatus validationStatus;
        uint suggestedPrice;
    }

    mapping(uint => PropertyRequest) public propertyRequests;

    // Mapping from owner to list of owned properties
    mapping(address => address[]) public ownerProperties;


    uint public requestCounter = 0;

    event NewPropertyAdded(address owner, address property);
    event NewPropertyValidationRequested(uint indexed id, string _address, string _apiId);
    event PriceSuggested(uint indexed id, uint suggestedPrice);
    event PriceAccepted(uint indexed id, uint acceptedPrice);
    event DataInvalidated(uint indexed id);

    constructor(address _company) {
        company = _company; // Set the company's address
    }

    function createPropertyTokenizeRequest(string memory _address, string memory _apiId,uint _price, uint _supply) public {
        PropertyRequest memory newRequest = PropertyRequest({
            id: requestCounter, 
            _address:_address,
            _apiId: _apiId,
            price: _price,
            _supply: _supply,
            validationStatus: ValidationStatus.pending,
            owner: msg.sender,
            suggestedPrice: 0
        });

        propertyRequests[requestCounter] = newRequest;

        emit NewPropertyValidationRequested(requestCounter, _address, _apiId);

        requestCounter++;
    }

    function suggestPrice(uint _id, uint _price) public {
        require(msg.sender == company, "OCCSP");
        require(propertyRequests[_id].validationStatus == ValidationStatus.pending, "RNIPS");

        PropertyRequest storage request = propertyRequests[_id];

        request.suggestedPrice = _price;
        request.validationStatus = ValidationStatus.priceSuggested;

        emit PriceSuggested(_id, _price);
    }

    function invalidateData(uint _id) public {
        require(msg.sender == company, "OCCID");
        require(propertyRequests[_id].validationStatus == ValidationStatus.pending, "NIP");

        propertyRequests[_id].validationStatus = ValidationStatus.invalidated;

        emit DataInvalidated(_id);
    }

    function acceptPrice(uint _id) public {
        require(propertyRequests[_id].validationStatus == ValidationStatus.priceSuggested, "PMBAF");

        propertyRequests[_id].price = propertyRequests[_id].suggestedPrice;
        propertyRequests[_id].validationStatus = ValidationStatus.priceAccepted;

        emit PriceAccepted(_id, propertyRequests[_id].suggestedPrice);
    }

    function createProperty(uint _id) public {
        // Only company can create properties
        require(msg.sender == company, "OCCCP");
        require(propertyRequests[_id].validationStatus == ValidationStatus.priceAccepted, "");

        PropertyRequest storage request = propertyRequests[_id];
        
        // Assuming supply as a property of PropertyInfo structure in PropertyRequest
        uint _supply = request._supply; 

        Property newProperty = new Property(request.id, request._address, request._apiId, request.price, _supply, request.owner);
        
        properties.push(address(newProperty));

        ownerProperties[request.owner].push(address(newProperty));

        emit NewPropertyAdded(msg.sender, address(newProperty));
    }

    function getPropertyTokenizeRequests() public view returns(PropertyRequest[] memory) {
        PropertyRequest[] memory requests = new PropertyRequest[](requestCounter);
        for (uint i = 0; i < requestCounter; i++) {
            requests[i] = propertyRequests[i];
        }
        return requests;
    }


    function rejectPrice(uint _id) public {
        require(msg.sender == propertyRequests[_id].owner, "OOCRP");

        // Reset the propertyRequest
        delete propertyRequests[_id];
    }

    function getPropertiesOfOwner(address _owner) public view returns(address[] memory) {
        return ownerProperties[_owner];
    }

    function getProperties() public view returns(address[] memory) {
        return properties;
    }

}


// RNIPS -> request is not in pending state
// OCCID -> only company can invalidate data
// OOCRP -> only owner can reject price
// OCCCP -> only company can create properties
// PMBAF -> The price must be accepted first.
// OCCSP -> Only the company can suggest a price.
// RNIPS -> The data must be in pending state.