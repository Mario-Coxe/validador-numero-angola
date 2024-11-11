export interface PhoneValidatorInterface {
  isValid(phoneNumber: string): boolean;
  format(phoneNumber: string): string;
}
