
import { PhoneNumberFormatter } from "../utils/phone-number-formatter";
import { PhoneValidatorInterface } from "../interfaces/phone-validator-Interface";

export class AngolaPhoneValidator implements PhoneValidatorInterface {
  private static readonly ANGOLA_PHONE_REGEX = /^(\+244|244)?9[1-9]\d{7}$/;

  isValid(phoneNumber: string): boolean {
    const formattedNumber = PhoneNumberFormatter.format(phoneNumber);
    return AngolaPhoneValidator.ANGOLA_PHONE_REGEX.test(formattedNumber);
  }

  format(phoneNumber: string): string {
    return PhoneNumberFormatter.format(phoneNumber);
  }
}
