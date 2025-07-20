const dadosBrutos = [
    { user_id: 101, fullName: "ana silva", email: "ana.silva@exemplo.com", status: "active" },
    { user_id: 102, fullName: "bruno costa", email: "bruno.c@exemplo.com", status: "inactive" },
    { user_id: 103, fullName: "carla souza", email: "carla.souza@exemplo.com", status: "active" },
    { user_id: 104, fullName: "daniel martins", email: "d.martins@exemplo.com", status: "active" }
];

function formatarUsuarios(lista){
    const listaformatada = lista.map(function(item){
        const nomeCapitalzado = item.fullName
            .split(' ')
            .map(function(palavra){
                return palavra.charAt(0).toUpperCase() + palavra.slice(1)
            })
            .join(' ')
        return{
            id: item.user_id,
            nomeCompleto: nomeCapitalzado,
            statusAtivo: item.status === 'active'
        }
    });
    return listaformatada
}

console.log(formatarUsuarios(dadosBrutos))

function gerarMensagensDeBoasVindas(lista){
    const usuariosAtivos = lista.filter(function(item) {
        return item.status === 'active';
    });

    const mensagens = usuariosAtivos.map(function(item){
        const nomeCapitalzado = item.fullName
            .split(' ')
            .map(function(palavra){
                return palavra.charAt(0).toUpperCase() + palavra.slice(1)
            })
            .join(' ')
        if (item.status === 'active')
            return "Bem-vindo(a) ao sistema, " + nomeCapitalzado + "!"
    });
    return mensagens
}

console.log(gerarMensagensDeBoasVindas(dadosBrutos))