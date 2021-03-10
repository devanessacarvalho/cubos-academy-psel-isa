function solucao(produtos, valorMaximo, avaliacaoMinima) {
    // seu código aqui
            /*A saída deverá ser sempre um array de produtos que atendem ao filtro, ou seja, que tenham preço menor ou igual ao preço máximo e avaliação igual ou superior a avaliação mínima.*/
        const tam = produtos.length;
        let produtosFiltrados = [];
        let cont = 0;
        
        for(let i = 0; i < tam; i++){
            if((produtos[i].valor <= valorMaximo) && (produtos[i].avaliacao >= avaliacaoMinima)){
                produtosFiltrados[cont]= produtos[i];
                cont++;
            }   
        }
        
            
        
        
        console.log(produtosFiltrados);
      
    }