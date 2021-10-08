// ./src/user.js
import $ from "jquery";
import { capitalize } from "./helpers";


function greetUser(name) {
  console.log(`Hello ${capitalize(name)}`);
}

greetUser("anonymous");

$(document).ready(function () {
  $("#msgid").html("This is Hello World by JQuery");
});
