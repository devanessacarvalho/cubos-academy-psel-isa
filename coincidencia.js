
function solucao(jogadas) {
    //seu código aqui
      let time0 = 0, time1 = 0;
      for(let i = 0; i< jogadas.length; i++){
          if(jogadas[i] === 0){
              time0++;
          }else{
              time1++;
          }
      }
      
      if(time0 === time1){
          console.log("true");
      }else{
          console.log("false");
      }
}