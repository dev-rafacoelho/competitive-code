### Desafio: Merge the Tools

**Descrição do Problema**

Considere o seguinte:

* Uma string, `s`, de comprimento `n`.
* Um inteiro, `k`, onde `k` é um fator de `n`.

Divida a string `s` em `n/k` substrings (`t_i`), cada uma com `k` caracteres. Para cada substring `t_i`, crie uma nova string `u_i` removendo todos os caracteres duplicados, mas mantendo a ordem da primeira aparição de cada caractere.

**Exemplo:**

`s = 'AAABCADDE'`
`k = 3`

As substrings `t_i` são: `'AAA'`, `'BCA'`, `'DDE'`.
As strings resultantes `u_i` são: `'A'`, `'BCA'`, `'DE'`.

---

**Sua Tarefa**

Dado `s` e `k`, imprima cada string `u_i` resultante em uma nova linha.

**Descrição da Função**

* **Função:** `merge_the_tools(string, k)`
* **Parâmetros:**
    * `string s`: a string a ser analisada.
    * `int k`: o tamanho das substrings.
* **O que Imprimir**
    * Imprima cada subsequência `u_i` em uma nova linha. Nenhum valor de retorno é esperado.

---

**Formato da Entrada**

* **Linha 1:** Uma única string, `s`.
* **Linha 2:** Um inteiro, `k`.

**Restrições**

* $1 \le n \le 10^4$ (onde `n` é o comprimento de `s`)
* $1 \le k \le n$
* É garantido que `n` é um múltiplo de `k`.

**Exemplo de Entrada**
AABCAAADA
3
**Exemplo de Saída**

AB
CA
AD