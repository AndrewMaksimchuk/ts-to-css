import { selector, property, atrule } from ".";

console.log(
  selector(
    ".user",
    property.margin("1px", "1px", "1px", "1px"),
    property.margin("1px", "1px", "1px", "1px")
  ),
  selector("#form"),

  atrule.namespace("http://"),
  atrule.namespace("http://", "about"),

  selector(".card:hover", ""),
  selector(".card:active", "dfsf:"),

  selector("button.logout", "dsfdf:sdfsdf")
);
