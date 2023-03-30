const contractInstance = await PropertyRegistry.deployed();

await contractInstance.registerProperty(
  "Example Property 2",
  "A beautiful property located in the heart of the city.",
  "123 Main St, Quetta, Pakistan",
  "QmWmyoMoctfbAaiEs2G46gPE8hzF8K2fLWc9zGvoEz73gA",
  "QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG",
  2000,
  500,
  0,
  0
);

const propertyId = (await contractInstance.propertyIds(0)).toString();
const property = await contractInstance.properties(propertyId);

console.log("Property ID:", property.id.toString());
console.log("Property Name:", property.name);
console.log("Property Description:", property.description);
console.log("Property Location:", property.location);
console;
