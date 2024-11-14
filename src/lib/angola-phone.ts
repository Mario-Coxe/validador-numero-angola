export class AngolaPhoneValidator {
  private operators: { [key: string]: string[] } = {
    Movicel: ["91", "99"],
    Unitel: ["92", "93", "94"],
    Africell: ["95"],
  };

  /**
   * Valida o número de telefone de acordo com os padrões de Angola.
   * O número pode ter o código do país (+244) ou não, e deve ter 9 dígitos ou 12 com o código de país.
   * @param phoneNumber - Número de telefone a validar.
   * @returns boolean - Verdadeiro se o número for válido.
   */
  isValid(phoneNumber: string): boolean {
    const validPattern = /^(\+244\s?\d{9}|244\s?\d{9}|9\s?\d{8})$/;
    return validPattern.test(phoneNumber.trim());
  }

  /**
   * Formata o número de telefone removendo o código de país (+244) e retornando apenas o número local.
   * Só formata se o número for válido.
   * @param phoneNumber - Número de telefone a formatar.
   * @returns string - Número formatado ou o número original se inválido.
   */
  format(phoneNumber: string): string {
    // Só formata se o número for válido
    if (this.isValid(phoneNumber)) {
      return phoneNumber
        .trim()
        .replace(/^(\+244|244)/, "")
        .slice(0, 9);
    }
    return phoneNumber;
  }

  /**
   * Retorna o operador do número de telefone com base nos prefixos conhecidos.
   * Retorna null se o número for inválido.
   * @param phoneNumber - Número de telefone a verificar.
   * @returns string - Nome da operadora ou null se não identificada ou inválida.
   */
  operator(phoneNumber: string): string | null {
    const cleanNumber = phoneNumber.trim().replace(/\s+/g, "");
    if (!this.isValid(cleanNumber)) {
      return null;
    }

    let operatorPrefix = "";

    if (cleanNumber.startsWith("+244")) {
      operatorPrefix = cleanNumber.slice(4, 6);
    } else if (cleanNumber.startsWith("244")) {
      operatorPrefix = cleanNumber.slice(3, 5);
    } else {
      operatorPrefix = cleanNumber.slice(0, 2);
    }
    for (const [operator, prefixes] of Object.entries(this.operators)) {
      if (prefixes.includes(operatorPrefix)) {
        return operator;
      }
    }

    return null;
  }
}
