pragma solidity ^0.8.19;

contract PropertyRegistry {
    enum PropertyType { Residential, Commercial }
    enum PropertyStatus { ForSale, ForRent }

    struct Property {
        uint256 id;
        string name;
        string description;
        string location;
        string imageCID;
        string legalDocumentsCID;
        uint256 totalArea;
        uint256 pricePerSqFt;
        address owner;
        PropertyType propertyType;
        PropertyStatus propertyStatus;
    }

    mapping(uint256 => Property) public properties;
    uint256[] public propertyIds;
    uint256 private nextPropertyId;

    function registerProperty(
        string memory _name,
        string memory _description,
        string memory _location,
        string memory _imageCID,
        string memory _legalDocumentsCID,
        uint256 _totalArea,
        uint256 _pricePerSqFt,
        PropertyType _propertyType,
        PropertyStatus _propertyStatus
    ) public {
        uint256 newPropertyId = nextPropertyId++;

        Property memory newProperty = Property({
            id: newPropertyId,
            name: _name,
            description: _description,
            location: _location,
            imageCID: _imageCID,
            legalDocumentsCID: _legalDocumentsCID,
            totalArea: _totalArea,
            pricePerSqFt: _pricePerSqFt,
            owner: msg.sender,
            propertyType: _propertyType,
            propertyStatus: _propertyStatus
        });

        properties[newPropertyId] = newProperty;
        propertyIds.push(newPropertyId);
    }
}
