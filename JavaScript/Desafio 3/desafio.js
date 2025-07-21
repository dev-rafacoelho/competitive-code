function somaDeMultiplos(numero){
    const multiplos = [];

    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0)
            multiplos.unshift(i);
    };
    for (let i = 1; i < numero; i++) {
        if (i % 5 === 0)
            if (!multiplos.includes(i)) { 
                multiplos.unshift(i);
            }
        };
    const initialValue = 0;
    const sumWithInitial = multiplos.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );

    return sumWithInitial

}

console.log(somaDeMultiplos(10))