const { isAngolaPhoneValid, formatAngolaPhone } = require("./dist/index");

const numeroTelefone = "+244 919999999";
console.log(isAngolaPhoneValid(numeroTelefone));
console.log(formatAngolaPhone(numeroTelefone));
