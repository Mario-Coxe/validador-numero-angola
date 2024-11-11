export class PhoneNumberFormatter {
  static format(phoneNumber: string): string {
    return phoneNumber.replace(/[\s\-]/g, "").replace(/^(\+244|244)/, "9");
  }
}
