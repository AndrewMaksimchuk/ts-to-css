const url = "https://www.w3.org/Style/CSS/all-properties.en.json";
const status = ["ED", "FPWD", "WD", "CR", "CRD", "PR", "REC"];
const missingsParameters = {
  Name: "",
  Value: "",
  Initial: "normal",
  "Applies to": "all elements",
  Inherited: "no",
  Percentages: "n/a",
  "Computed value": "",
  "Canonical order": "",
  "Animation type": "",
};
const properties = new Map();

export async function save(properties) {
  const filteredProperties = Array.from(properties, ([key, value]) => value);
  await Bun.write(
    "properties-from-w3.json",
    JSON.stringify(filteredProperties)
  );
}

export function normilizePropertiObject(property) {
  const newObject = {
    ...property,
    ...missingsParameters,
    Name: property.property,
  };
  Reflect.deleteProperty(newObject, "property");
  return newObject;
}

export async function main() {
  const propertiesFullCollection = await (await fetch(url)).json();

  propertiesFullCollection.forEach((propertyData) => {
    const indexOfStatus = status.indexOf(propertyData.status);

    if (properties.has(propertyData.property)) {
      const indexOfPropertyStatus = status.indexOf(
        properties.get(propertyData.property).status
      );
      if (indexOfPropertyStatus > indexOfStatus) return;
    }

    properties.set(
      propertyData.property,
      normilizePropertiObject(propertyData)
    );
  });

  await save(properties);
}

main();
