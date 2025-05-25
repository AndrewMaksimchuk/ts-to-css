import { selector, boxSizing, margin, atrule, display } from ".";

console.log(
  selector(
    ".user",
    display("block"),
    "display:lfkdsglksdfg",
    boxSizing("border-box"),
    margin("1px", "1px", "1px", "1px"),
    margin("1px", "1px", "1px", "1px")
  ),
  selector("#form"),

  atrule.namespace("http://"),
  atrule.namespace("http://", "about")
);
