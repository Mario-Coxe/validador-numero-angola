export class AngolaPhoneValidator {
  /**
   * Verifica se o número de telefone é válido para o padrão de Angola.
   * Aceita números no formato "+2449XXXXXXXX" ou "9XXXXXXXX".
   * @param phoneNumber - Número de telefone a validar.
   * @returns boolean - Verdadeiro se o número for válido.
   */
  isValid(phoneNumber: string): boolean {
    // Verifica se a string está vazia
    if (!phoneNumber.trim()) {
      console.log("O número de telefone não pode ser vazio.");
      return false; // ou lançar um erro, dependendo do seu caso de uso
    }

    // Remove espaços e caracteres não numéricos
    phoneNumber = phoneNumber.replace(/\s/g, "");

    // Verifica se o número contém o código de país "+244"
    const hasCountryCode =
      phoneNumber.startsWith("+244") && phoneNumber.length === 13;

    // Remove o prefixo de código de país para validação de 9 dígitos
    if (hasCountryCode) {
      phoneNumber = phoneNumber.slice(4);
    }

    // Verifica se o número é composto apenas por dígitos e começa com "9"
    return (
      /^\d{9}$/.test(phoneNumber) &&
      phoneNumber.startsWith("9") &&
      phoneNumber[1] !== "0"
    );
  }

  /**
   * Formata o número de telefone removendo o código de país, se presente.
   * @param phoneNumber - Número de telefone a formatar.
   * @returns string - Número formatado com 9 dígitos.
   */
  format(phoneNumber: string): string {
    phoneNumber = phoneNumber.replace(/\s/g, "");

    if (phoneNumber.startsWith("+244") && phoneNumber.length === 13) {
      return phoneNumber.slice(4); // Remove "+244"
    }

    return phoneNumber; // Retorna o número como está se tiver 9 dígitos
  }
}
