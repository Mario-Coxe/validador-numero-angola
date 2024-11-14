# Validador e Formatador de Números de Telefone de Angola

**Validador e Formatador de Números de Telefone de Angola** é uma biblioteca simples e eficiente para validar e formatar números de telefone de acordo com as regras de numeração de Angola. Ela lida com números com ou sem o prefixo do país (`+244`), garantindo que os números estejam no formato correto e atendam às especificações locais. A biblioteca também identifica a operadora associada ao número.

## Funcionalidades

- **Validação de Número de Telefone**: Verifica se o número de telefone segue o formato correto de numeração de Angola.
- **Formatação de Número de Telefone**: Remove o prefixo `+244` do número, se presente, e formata o número para o padrão local.
- **Identificação da Operadora**: Identifica a operadora (Movicel, Unitel, Africell) com base no prefixo do número de telefone.
- **Entrada Flexível**: Suporta números com ou sem o código de país (`+244`) e elimina espaços extras.
- **Regras de Validação**:
  - O número de telefone deve começar com `+244` ou com o dígito `9` (com 9 dígitos).
  - Se o número começar com `9`, não pode ter `90` como o segundo dígito.
  - Se começar com `+244`, o número deve ter exatamente 13 dígitos (incluindo o código do país).

## Instalação

Para instalar a biblioteca em seu projeto, execute o seguinte comando:

```bash
npm install validador-numero-angola
```

## Uso

### Exemplo

```typescript
import { isAngolaPhoneValid, formatAngolaPhone, operator } from "validador-numero-angola";

// Número de telefone para testar
const numeroTelefone = "+244 919999999";

console.log(isAngolaPhoneValid(numeroTelefone)); // true ou false
console.log(formatAngolaPhone(numeroTelefone));  // "919999999"
console.log(operator(numeroTelefone)); // "Movicel"
```

### Funções

#### `isAngolaPhoneValid(phoneNumber: string): boolean`

Valida se o número de telefone fornecido é válido conforme as regras de numeração de Angola.

- **Entrada**: Uma string contendo o número de telefone (com ou sem espaços).
- **Saída**: Retorna `true` se o número for válido, `false` caso contrário.

#### `formatAngolaPhone(phoneNumber: string): string`

Formata o número de telefone removendo o prefixo `+244` (caso presente). A formatação só ocorrerá se o número for validado como correto, garantindo que números inválidos não sejam alterados.

- **Entrada**: Uma string contendo o número de telefone.
- **Saída**: Retorna uma string com o número formatado (sem o prefixo `+244`), ou o número original se não for válido.

#### `operator(phoneNumber: string): string | null`

Identifica a operadora do número de telefone com base no prefixo. A função retorna o nome da operadora (Movicel, Unitel, Africell, etc.) ou `null` se o número for inválido.

- **Entrada**: Uma string contendo o número de telefone.
- **Saída**: O nome da operadora (por exemplo, "Movicel", "Unitel", "Africell"), ou `null` se o número não for válido ou não puder ser identificado.

### Exemplo de Formatação de Número e Identificação da Operadora

```typescript
const numeroTelefone = "+244 995047526";

console.log(isAngolaPhoneValid(numeroTelefone)); // true
console.log(formatAngolaPhone(numeroTelefone));  // "995047526"
console.log(operator(numeroTelefone)); // "Africell"
```

## Contribuição

Este projeto é de código aberto e está aberto à contribuição da comunidade. Se você deseja contribuir, por favor:

1. Faça um fork do repositório.
2. Crie uma branch para sua alteração (`git checkout -b feature-nome-da-feature`).
3. Envie um pull request para revisão.

Certifique-se de seguir as convenções de codificação e de incluir testes adequados para garantir a qualidade do código.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
