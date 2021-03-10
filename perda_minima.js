function solucao(precos) {
    // seu código aqui
      let perca = 999999999999, percaMinima = 9999999999999999 ;
      for(let i = 0; i < precos.length - 1; i++){
          for(let j = i+1; j < precos.length; j++){
              if(precos[j] < precos [i]) perca = precos[i] - precos[j];
               
              if( perca < percaMinima ){
                  percaMinima = perca;
              }
          }
      }
      
      console.log(percaMinima);
  }