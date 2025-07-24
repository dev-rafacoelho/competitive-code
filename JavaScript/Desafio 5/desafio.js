const cpf = "075.869.481-43";

function apenasNumeros(string) {
  return string.replace(/[^0-9]/g, '');
}

function verificacaoPrimeiroDigito(numeros) {
    const noveDigitos = numeros.slice(0, 9);

    const soma = noveDigitos.split('').reduce((acumulador, digito, index) => {
    const peso = 10 - index;
    return acumulador + (parseInt(digito) * peso);
    }, 0); 

    const resto = soma % 11;
    const digitoCalculado = resto < 2 ? 0 : 11 - resto;
    const digitoReal = parseInt(numeros[9]);

    return digitoReal === digitoCalculado
}

verificacaoPrimeiroDigito(apenasNumeros(cpf));

function verificacaoSegundoDigito(numeros) {
    const noveDigitos = numeros.slice(0, 10);

    const soma = noveDigitos.split('').reduce((acumulador, digito, index) => {
    const peso = 11 - index;
    return acumulador + (parseInt(digito) * peso);
    }, 0); 

    const resto = soma % 11;
    const digitoCalculado = resto < 2 ? 0 : 11 - resto;
    const digitoReal = parseInt(numeros[10]);

    return digitoReal === digitoCalculado
}

function cpfValido(cpf){
    const cpfNumerico = apenasNumeros(cpf);
    if (verificacaoPrimeiroDigito(cpfNumerico) && verificacaoSegundoDigito(cpfNumerico) === true ) {
        return true
    } else {
        return false
    }
}

console.log("CPF é valido: ", cpfValido(cpf))