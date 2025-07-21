# Desafio de Código: Somador de Múltiplos

### O Problema

Crie uma função em JavaScript chamada `somaDeMultiplos` que recebe um número inteiro como argumento. A função deve calcular a soma de todos os múltiplos de 3 ou 5 que sejam **menores** que o número fornecido.

### Regras

* A função deve se chamar `somaDeMultiplos`.
* Ela deve aceitar um único argumento: um número inteiro (`numero`).
* Ela deve iterar de 1 até o número anterior ao fornecido (`numero - 1`).
* Se um número na iteração for múltiplo de **3** ou de **5**, ele deve ser adicionado à soma total.
* Se um número for múltiplo de ambos (como 15), ele deve ser somado **apenas uma vez**.
* A função deve retornar a soma total.

### Exemplo

Se passarmos o número `10` para a função, os múltiplos de 3 ou 5 menores que 10 são: 3, 5, 6 e 9.

> A soma desses números é `3 + 5 + 6 + 9 = 23`.

Portanto, `somaDeMultiplos(10)` deve retornar `23`.