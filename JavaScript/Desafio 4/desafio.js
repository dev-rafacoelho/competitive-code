let s = "Palavras";
let k = 2;

function merge_the_tools(s,k){
        if (s.length === 0 || s.length % k !== 0) {
        console.log("O número de caracteres tem que ser divisível por K 😊")
        console.log("Quantidade de Carcteres:",s.length,"  Inteiro:",k)
    }else{
        let qtd_t_i = s.length/k
        let lista = s.split('');
        for(var i = 0 ; i < 1+qtd_t_i ;i = i+qtd_t_i){
            let t_i = (lista.slice(i,qtd_t_i+i))
            const duplicata = [...new Set(t_i)]
            const u_i = duplicata.join('');
            console.log(u_i)
        }
    }
}

merge_the_tools(s,k)


