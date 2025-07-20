======================================================
DESAFIO DE CÓDIGO: O Analista Financeiro
======================================================

### Contexto

Você está desenvolvendo o back-end de um aplicativo de finanças pessoais. Sua API recebe uma lista de transações, mas os dados estão em um formato bruto. Sua tarefa é processar essa lista para enriquecê-la com informações úteis, como categorias e valores padronizados, antes de enviá-la para o aplicativo cliente.

### Dados de Entrada

Use o seguinte array de transações como ponto de partida:

const transacoesFinanceiras = [
    { id: 't1', descricao: 'Salário Mensal', valor: 5000, tipo: 'receita' },
    { id: 't2', descricao: 'Aluguel do Apartamento', valor: -1500, tipo: 'despesa' },
    { id: 't3', descricao: 'Compras no Supermercado', valor: -450, tipo: 'despesa' },
    { id: 't4', descricao: 'Venda de item usado', valor: 200, tipo: 'receita' },
    { id: 't5', descricao: 'Conta de Internet', valor: -100, tipo: 'despesa' }
];

---

### Missão Principal: Requisitos

Crie uma função chamada `normalizarTransacoes`.

A função deve:
1.  Receber o array `transacoesFinanceiras` como argumento.
2.  Usar o método `.map()` como a principal ferramenta para criar um novo array de transações "normalizadas".
3.  O array original não pode ser modificado.
4.  Cada novo objeto no array de resultado deve ter a seguinte estrutura:
    - `id`: Deve ser o mesmo `id` da transação original.
    - `descricao`: A mesma `descricao` original.
    - `valorAbsoluto`: O valor da transação como um número sempre positivo. Por exemplo, tanto `5000` quanto `-1500` se tornariam `5000` e `1500`, respectivamente.
    - `tipo`: O mesmo `tipo` original (`receita` ou `despesa`).
    - `categoria`: Uma nova propriedade do tipo string, definida com base na `descricao` da transação. Use as seguintes regras:
        - Se a descrição contiver a palavra "Salário", a categoria é `"Renda Fixa"`.
        - Se a descrição contiver "Aluguel" ou "Internet", a categoria é `"Despesas Essenciais"`.
        - Se a descrição contiver "Supermercado", a categoria é `"Alimentação"`.
        - Para qualquer outra transação, a categoria deve ser `"Outros"`.

### Resultado Esperado para a Missão Principal

[
  { id: 't1', descricao: 'Salário Mensal', valorAbsoluto: 5000, tipo: 'receita', categoria: 'Renda Fixa' },
  { id: 't2', descricao: 'Aluguel do Apartamento', valorAbsoluto: 1500, tipo: 'despesa', categoria: 'Despesas Essenciais' },
  { id: 't3', descricao: 'Compras no Supermercado', valorAbsoluto: 450, tipo: 'despesa', categoria: 'Alimentação' },
  { id: 't4', descricao: 'Venda de item usado', valorAbsoluto: 200, tipo: 'receita', categoria: 'Outros' },
  { id: 't5', descricao: 'Conta de Internet', valorAbsoluto: 100, tipo: 'despesa', categoria: 'Despesas Essenciais' }
]

---

### Missão Bônus: Requisitos

Crie uma segunda função chamada `calcularSaldoAcumulado`.

Esta função deve:
1.  Receber o array de transações **já normalizadas** (o resultado da sua primeira função).
2.  Usar `.map()` para adicionar uma nova propriedade a cada objeto: `saldoParcial`.
3.  O `saldoParcial` representa o saldo da conta *após* a ocorrência daquela transação, começando de um saldo inicial de 0.
    - Para a primeira transação, o saldo parcial será `0 + valor` (se for receita) ou `0 + valor` (se for despesa, lembre-se que o valor no array original é negativo).
    - Para a segunda transação, será o `saldoParcial` da transação anterior mais o valor da transação atual.
    - E assim por diante.

### Resultado Esperado para a Missão Bônus

(Considerando o `valor` original, não o `valorAbsoluto`, para o cálculo do saldo)

[
  { id: 't1', /* ...outras chaves... */, saldoParcial: 5000 },
  { id: 't2', /* ...outras chaves... */, saldoParcial: 3500 }, // 5000 - 1500
  { id: 't3', /* ...outras chaves... */, saldoParcial: 3050 }, // 3500 - 450
  { id: 't4', /* ...outras chaves... */, saldoParcial: 3250 }, // 3050 + 200
  { id: 't5', /* ...outras chaves... */, saldoParcial: 3150 }  // 3250 - 100
]