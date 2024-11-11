import { PhoneNumberFormatter } from "../utils/phone-number-formatter";
import { PhoneValidatorInterface } from "../interfaces/phone-validator-Interface";

export class AngolaPhoneValidator {
  isValid(phoneNumber: string): boolean {
    phoneNumber = phoneNumber.replace(/\s/g, "");

    const hasCountryCode =
      phoneNumber.length === 13 && phoneNumber.substring(0, 4) === "+244";

    if (hasCountryCode) {
      phoneNumber = phoneNumber.substring(4);
    }

    if (!/^\d+$/.test(phoneNumber)) {
      return false;
    }

    if (phoneNumber.length === 9 && phoneNumber[0] === "9") {
      if (phoneNumber[1] === "0") {
        return false;
      }
      return true;
    }
    return false;
  }

  format(phoneNumber: string): string {
    if (this.isValid(phoneNumber)) {
      phoneNumber = phoneNumber.replace(/\s/g, "");
      if (phoneNumber.length === 9) {
        return phoneNumber;
      }
      return phoneNumber.substring(4);
    }
    return phoneNumber;
  }
}
