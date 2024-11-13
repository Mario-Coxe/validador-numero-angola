import { isAngolaPhoneValid, formatAngolaPhone } from "validador-numero-angola";

// Número de telefone para testar
const numeroTelefone = "";

console.log(isAngolaPhoneValid(numeroTelefone)); // true ou false
console.log(formatAngolaPhone(numeroTelefone));  // "919999999"