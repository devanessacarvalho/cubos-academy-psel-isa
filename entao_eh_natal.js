
function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    // seu código aqui
      let  total  = 0, desconto = 0, frete = 1.2*distanciaRestaurante, descontoSal = 0, descontoDoce = 0, descontoBebi  = 0, totalComDesconto = 0, totalComCupom = 0;
      
      for(let i = 0; i < produtos.length; i++){
        if(produtos[i].categoria === "SALGADO"){
            desconto = 10/100;
            total = (produtos[i].quantidade * produtos[i].valor);
            descontoSal += total - (desconto*total);
        }
        if(produtos[i].categoria === "DOCE"){
            desconto = 15/100;   
            total = (produtos[i].quantidade * produtos[i].valor);
            descontoDoce += total - (desconto*total);
        }
        if(produtos[i].categoria === "BEBIDA"){
            desconto = 30/100;
            total = (produtos[i].quantidade * produtos[i].valor);
            descontoBebi += total - (desconto*total);
        }
         
     }
          totalComDesconto = descontoSal + descontoDoce + descontoBebi;
          desconto = 0;
          
          //console.log(descontoSal);
          //console.log(descontoDoce);
          //console.log(descontoBebi);
          //console.log(totalComDesconto);
          
            
            
          if(ehPrimeiraCompra === true){
                  if(cupomDesconto === "NATAL10" && totalComDesconto > 3000){ //>30
                      desconto = 10/100;
                  }else if(cupomDesconto === "NATAL20" && totalComDesconto > 4500){ //45
                      desconto = 20/100;    
                  }else if((cupomDesconto === "NATAL30") && (totalComDesconto > 6000)){ //>60
                      desconto = 30/100;   
                  }else if(cupomDesconto === "NATALSUPREMO" && totalComDesconto > 8000){ //>80 com frete gratis
                      desconto = 30/100;  
                      frete = 0;
                  } 
            }
          totalComCupom = (totalComDesconto - (desconto*totalComDesconto)) + (frete*100);
          
           //console.log(desconto);
          //console.log(frete);
          console.log(totalComCupom);
        
          
  
          
  }