function solucao(stringCorrompida) {
	// seu código aqui
    let string = "";
    for(let i = 0 ; i < stringCorrompida.length; i++){
        if((stringCorrompida[i] >= "a" && stringCorrompida[i] <= "z") || (stringCorrompida[i] >= "A" && stringCorrompida[i] <= "Z") || (stringCorrompida[i] === " ")){
            string += stringCorrompida[i];
        }
    }
    console.log(string);
}