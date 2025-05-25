import { selector, margin, atrule } from ".";

console.log(
  selector(
    ".user",
    margin("1px", "1px", "1px", "1px"),
    margin("1px", "1px", "1px", "1px")
  ),
  selector("#form"),

  atrule.namespace("http://"),
  atrule.namespace("http://", "about"),

  selector(".card:hover", ""),
  selector(".card:active", "dfsf:")
);
