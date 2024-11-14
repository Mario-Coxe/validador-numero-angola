import { AngolaPhoneValidator } from "./lib/angola-phone";
const validator = new AngolaPhoneValidator();

export function isAngolaPhoneValid(phoneNumber: string): boolean {
  return validator.isValid(phoneNumber);
}

export function formatAngolaPhone(phoneNumber: string): string {
  return validator.format(phoneNumber);
}

export function getOperator(phoneNumber: string): string | null {
  return validator.operator(phoneNumber);
}
