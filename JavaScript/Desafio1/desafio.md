======================================================
DESAFIO DE CÓDIGO: O Processador de Dados
======================================================

### Contexto

Você recebeu um conjunto de dados brutos de uma fonte externa. Sua tarefa é processar esses dados, transformando-os em uma estrutura limpa e padronizada para uso interno no sistema.

### Dados de Entrada

Use o seguinte array como ponto de partida para sua função:

const dadosBrutos = [
    { user_id: 101, fullName: "ana silva", email: "ana.silva@exemplo.com", status: "active" },
    { user_id: 102, fullName: "bruno costa", email: "bruno.c@exemplo.com", status: "inactive" },
    { user_id: 103, fullName: "carla souza", email: "carla.souza@exemplo.com", status: "active" },
    { user_id: 104, fullName: "daniel martins", email: "d.martins@exemplo.com", status: "active" }
];

---

### Missão Principal: Requisitos

Crie uma função chamada `formatarUsuarios`.

A função deve:
1.  Receber o array `dadosBrutos` como argumento.
2.  Retornar um **novo array** onde cada item é um objeto transformado.
3.  O método principal para a transformação deve ser o `.map()`.
4.  O array original (`dadosBrutos`) não pode sofrer mutações.
5.  Cada objeto no novo array deve ter a seguinte estrutura:
    - `id`: Deve conter o valor de `user_id`.
    - `nomeCompleto`: Deve conter o valor de `fullName`, com a primeira letra de cada palavra em maiúscula.
    - `statusAtivo`: Deve ser um valor booleano (`true`/`false`), representando se o `status` original é "active".

### Resultado Esperado para a Missão Principal

[
  { id: 101, nomeCompleto: "Ana Silva", statusAtivo: true },
  { id: 102, nomeCompleto: "Bruno Costa", statusAtivo: false },
  { id: 103, nomeCompleto: "Carla Souza", statusAtivo: true },
  { id: 104, nomeCompleto: "Daniel Martins", statusAtivo: true }
]

---

### Missão Bônus: Requisitos

Crie uma segunda função chamada `gerarMensagensDeBoasVindas`.

A função deve:
1.  Receber o mesmo array `dadosBrutos`.
2.  Primeiro, selecionar apenas os usuários cujo `status` é "active".
3.  Para cada usuário ativo, gerar uma string de saudação.
4.  Retornar um novo array contendo apenas as strings de saudação.

### Resultado Esperado para a Missão Bônus

[
  "Bem-vindo(a) ao sistema, Ana Silva!",
  "Bem-vindo(a) ao sistema, Carla Souza!",
  "Bem-vindo(a) ao sistema, Daniel Martins!"
]