const transacoesFinanceiras = [
    { id: 't1', descricao: 'Salário Mensal', valor: 5000, tipo: 'receita' },
    { id: 't2', descricao: 'Aluguel do Apartamento', valor: -1500, tipo: 'despesa' },
    { id: 't3', descricao: 'Compras no Supermercado', valor: -450, tipo: 'despesa' },
    { id: 't4', descricao: 'Venda de item usado', valor: 200, tipo: 'receita' },
    { id: 't5', descricao: 'Conta de Internet', valor: -100, tipo: 'despesa' }
];

function normalizarTransacoes(transacao){
    const transacoes = transacao.map(function(item){
        const valorAbsoluto = item.valor > 0 ? item.valor : item.valor*-1;
        let categoria; 
        const descricao = item.descricao; 

        if (descricao.includes('Salário')) {
            categoria = 'Renda Fixa';
        } else if (descricao.includes('Aluguel') || descricao.includes('Internet')) {
            categoria = 'Despesas Essenciais';
        } else if (descricao.includes('Supermercado')) {
            categoria = 'Alimentação';
        } else {
            categoria = 'Outros';
        }
        return {
            id: item.id,
            descricao: item.descricao,
            valorAbsoluto: valorAbsoluto,
            tipo: item.tipo,
            categoria: categoria
        };
    });
    return transacoes;
}

console.log(normalizarTransacoes(transacoesFinanceiras));