"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angola_phone_validator_1 = require("angola-phone-validator");
var numero = "+244912345678";
// Testando a validação do número de telefone
console.log((0, angola_phone_validator_1.isAngolaPhoneValid)(numero)); // Esperado: true ou false
// Testando a formatação do número de telefone
console.log((0, angola_phone_validator_1.formatAngolaPhone)(numero)); // Esperado: "912345678"
