//npm i email-validator

var validator = require("email-validator");

const val=validator.validate("test@email.com"); 
console.log(val);    //true