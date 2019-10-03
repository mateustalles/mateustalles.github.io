function criaTabela(n) {
    let tabela = document.querySelector(".pixel-table");
        tableArray=[];
        for (let i = 0; i<n ; i++) {
            let linha = document.createElement("tr");
            tabela.appendChild(linha);
            for (let j = 0; j<n ; j++){
                let celula = document.createElement("td");
                let novaLinha = linha.appendChild(celula);
                novaLinha.id=[i,j];
                tableArray.push(novaLinha)
            }
        }
        document.querySelector('.container-table').style.minWidth=n*40+"px";
        console.log(tableArray)
}
criaTabela(7)