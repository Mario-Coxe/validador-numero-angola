import { AngolaPhoneValidator } from "./validators/angola-phone-validator";
const validator = new AngolaPhoneValidator();

export function isAngolaPhoneValid(phoneNumber: string): boolean {
  return validator.isValid(phoneNumber);
}

export function formatAngolaPhone(phoneNumber: string): string {
  return validator.format(phoneNumber);
}
