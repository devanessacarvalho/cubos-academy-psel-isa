function solucao(ganhos, serasaScore, mesesParaPagar) {
    //seu código aqui
      /* 1ª faixa (Score menor que 300), juros = 3%;
         2ª faixa (Score menor que 700), juros = 9%;
         3ª faixa (Score maior ou igual a 700), juros = 15%;*/
      let juros = 0;
      
      if(serasaScore >= 700){
          juros = 15;
      }else if(serasaScore < 700 && serasaScore >= 300){
          juros = 9;
      }else if(serasaScore < 300){
          juros = 3;
      }
      
      let p1 = ganhos*3, p2 = juros/100;
      let parcela = (p1+(ganhos*p2)) / (mesesParaPagar); 
      console.log(parcela);
  }