import {
  isAngolaPhoneValid,
  formatAngolaPhone,
  getOperator,
} from "validador-numero-angola";

// Número de telefone para testar
const numeroTelefone = "+244 919999999";

console.log(isAngolaPhoneValid(numeroTelefone)); // true
console.log(formatAngolaPhone(numeroTelefone)); // "919999999"
console.log(getOperator(numeroTelefone)); // "Movicel"
