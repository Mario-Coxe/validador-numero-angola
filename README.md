
# Validador e Formatador de Números de Telefone de Angola

Uma utilitária simples para validar e formatar números de telefone em Angola. Esta biblioteca garante que os números de telefone sejam formatados corretamente, tenha ou não o prefixo do país (`+244`). Ela também valida se o número de telefone segue o formato esperado para números angolanos.

## Funcionalidades

- **Validação de Número de Telefone**: Verifica se um número de telefone é válido com base no sistema de numeração de Angola.
- **Formatação de Número de Telefone**: Formata números de telefone, removendo o prefixo `+244`, caso exista.
- **Tratamento de Entrada Flexível**: Trata números com ou sem o código do país (`+244`) e remove espaços desnecessários.
- **Regras de Validação**:
  - Números válidos devem começar com `+244` ou apenas com `9` (com 9 dígitos).
  - Se o número começar com `9`, não pode conter `90` como o segundo dígito.
  - Se o número começar com `+244`, deve ter exatamente 13 dígitos (incluindo o `+244`).

## Instalação

Para instalar a biblioteca, execute o seguinte comando:

```bash
npm install validador-numero-angola
```

## Uso

### Exemplo

```typescript
import { isAngolaPhoneValid, formatAngolaPhone } from "validador-numero-angola";

// Número de telefone para testar
const numeroTelefone = "+244 919999999";

console.log(isAngolaPhoneValid(numeroTelefone)); // true ou false
console.log(formatAngolaPhone(numeroTelefone));  // "919999999"
```

### Funções

#### `isAngolaPhoneValid(phoneNumber: string): boolean`

Valida se o número de telefone fornecido é válido de acordo com as regras angolanas.

- **Entrada**: Uma string contendo o número de telefone (com ou sem espaços).
- **Saída**: `true` se o número for válido, `false` caso contrário.

#### `formatAngolaPhone(phoneNumber: string): string`

Formata o número de telefone removendo o prefixo `+244` se for válido. Caso o número não tenha o prefixo `+244`, ele retorna o número como está.

- **Entrada**: Uma string contendo o número de telefone.
- **Saída**: Uma string representando o número de telefone formatado, ou o número original se não for válido.

### Exemplo de Formatação de Número

```typescript
const numeroTelefone = "+244 995047526";

console.log(isAngolaPhoneValid(numeroTelefone)); // true
console.log(formatAngolaPhone(numeroTelefone));  // "995047526"
```

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para fazer um fork do repositório e enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.


Este `README` fornece uma visão geral do projeto, instruções de instalação, exemplos de uso, e explicações detalhadas das funções `isAngolaPhoneValid` e `formatAngolaPhone`. Você pode atualizá-lo conforme necessário com base nas alterações e novas funcionalidades que você implementar.