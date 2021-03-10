function solucao(velocidade, aceleracao, distanciaObjeto) {
    //seu código aqui 
      /*"COLISAO A FRENTE" quando a distância até o objeto for menor do que a distância de derrapagem do carro
      "NAO ACELERE" quando as distâncias forem iguais
      "CAMINHO SEGURO" quando a distância até o objeto for maior do que a distância de derrapagem do carro*/
      let distancia = (-(velocidade*velocidade))/(2*aceleracao);
      
      if(distanciaObjeto < distancia){
          console.log("COLISAO A FRENTE");
      }else if(distanciaObjeto === distancia){
          console.log("NAO ACELERE");     
      }else{
          console.log("CAMINHO SEGURO");
      }
  
  }