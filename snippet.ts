interface Property {
  url: string;
  status: string;
  title: string;
  Name: string;
  Value: string;
  Initial: string;
  "Applies to": string;
  Inherited: string;
  Percentages: string;
  "Computed value": string;
  "Canonical order": string;
  "Animation type": string;
}

interface Template {
  prefix: string;
  body: [string, "$0"];
  description: string;
}

const descriptionFields = [
  "Initial",
  "Applies to",
  "Inherited",
  "Percentages",
  "Computed value",
  "Canonical order",
  "Animation type",
];
const snippets: Record<string, Template> = {};

export function setDescription(property: Property) {
  return descriptionFields
    .map((field) => {
      return field + ": " + property[field];
    })
    .join("\n");
}

export async function main() {
  propertyNames.forEach((property) => {
    const propInSavedFile = cssProperties.find((propertyObj) => {
      return propertyObj["Name"] === property;
    });

    if (undefined === propInSavedFile) return;
    const values = propInSavedFile["Value"].split("|");

    console.log(values);

    values.forEach((value) => {
      const propertyValue = property + ": " + value;
      snippets[property] = {
        prefix: propertyValue,
        body: [propertyValue + ";", "$0"],
        description: setDescription(propInSavedFile),
      };
    });
  });

  Bun.write("snippet.json", JSON.stringify(snippets));
}

main();
