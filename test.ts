import {
  isAngolaPhoneValid,
  formatAngolaPhone,
  getOperator,
} from "validador-numero-angola";

const numeroTelefone = "123456789";

console.log(isAngolaPhoneValid(numeroTelefone));
console.log(formatAngolaPhone(numeroTelefone));
console.log(getOperator(numeroTelefone));
