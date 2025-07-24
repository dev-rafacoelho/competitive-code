# Desafio de Lógica: Validador de CPF em JavaScript

## 🎯 Objetivo

Criar uma função em JavaScript puro, sem dependências de front-end, chamada `validarCPF(cpf)`. Esta função deverá receber uma string contendo um número de CPF e retornar `true` se o CPF for válido e `false` caso contrário.

O foco deste desafio é a implementação da lógica algorítmica e a manipulação de dados.

---

## 📖 Contexto do Problema

O CPF (Cadastro de Pessoas Físicas) é um documento de identificação brasileiro que utiliza um algoritmo de verificação para garantir sua autenticidade. Este algoritmo se baseia nos 9 primeiros dígitos para calcular os 2 últimos, conhecidos como **dígitos verificadores**. Sua tarefa é implementar este algoritmo em JavaScript.

---

## 📋 Regras de Validação

Para que um CPF seja considerado válido, ele deve passar por todas as etapas de verificação a seguir.

### 1. Formato e Limpeza
- A função deve aceitar CPFs em dois formatos: com pontuação (`"XXX.XXX.XXX-XX"`) ou apenas com números (`"XXXXXXXXXXX"`).
- O primeiro passo da sua lógica deve ser remover todos os caracteres não numéricos da string de entrada.

### 2. Verificações Iniciais
- **Tamanho:** Após a limpeza, a string resultante deve conter exatamente **11 dígitos**. Se o tamanho for diferente, o CPF é imediatamente considerado inválido.
- **Dígitos Iguais:** Verifique se todos os 11 dígitos são idênticos (ex: `"11111111111"`, `"22222222222"`). Se forem, o CPF é inválido. Esta é uma regra de exceção ao cálculo matemático.

### 3. Cálculo do Primeiro Dígito Verificador (10º dígito)

1.  **Seleção:** Utilize os **9 primeiros dígitos** do CPF limpo.
2.  **Multiplicação:** Multiplique cada um desses 9 dígitos por um peso, em ordem decrescente de 10 a 2.
    - 1º dígito x 10
    - 2º dígito x 9
    - 3º dígito x 8
    - ...
    - 9º dígito x 2
3.  **Soma:** Some os resultados de todas as multiplicações.
4.  **Cálculo do Dígito:**
    - Calcule o **resto** da divisão da soma total por 11 ( `soma % 11` ).
    - Se o resto for `0` ou `1`, o primeiro dígito verificador é **`0`**.
    - Caso contrário, o dígito verificador é **`11 - resto`**.
5.  **Comparação:** Compare o dígito calculado com o 10º dígito do CPF original. Se eles não forem iguais, o CPF é inválido.

### 4. Cálculo do Segundo Dígito Verificador (11º dígito)

O processo é muito similar, mas agora usamos os 10 primeiros dígitos.

1.  **Seleção:** Utilize os **10 primeiros dígitos** do CPF limpo (incluindo o primeiro dígito verificador que você acabou de validar).
2.  **Multiplicação:** Multiplique cada um desses 10 dígitos por um peso, em ordem decrescente de 11 a 2.
    - 1º dígito x 11
    - 2º dígito x 10
    - 3º dígito x 9
    - ...
    - 10º dígito x 2
3.  **Soma:** Some os resultados de todas as multiplicações.
4.  **Cálculo do Dígito:**
    - A regra é idêntica à anterior: calcule o **resto** da divisão da soma por 11.
    - Se o resto for `0` ou `1`, o segundo dígito verificador é **`0`**.
    - Caso contrário, o dígito verificador é **`11 - resto`**.
5.  **Comparação Final:** Compare o dígito calculado com o 11º dígito do CPF original. Se eles não forem iguais, o CPF é inválido.

---

## ✅ Conclusão

Se o CPF passar por **todas** as validações acima sem falhar, a função `validarCPF` deve retornar `true`. Caso contrário, em qualquer ponto de falha, deve retornar `false`.
