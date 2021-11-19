const calcular = document.getElementById('calcular');


function executar() {
    const nome = document.getElementById('nome').value;
    const valorMensal = document.getElementById('valorMensal').value;
    const taxaJurus = document.getElementById('taxaJurus').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && valorMensal !== '' && taxaJurus !== '' && tempo !== '') {
        
        var P = 0;
        var i = 0;
        var N = 0;
        var VF = 0;
        
        P = valorMensal;

        i = taxaJurus
        
        N = tempo;
        
        VF = (((((1 + (i/100))**N)-1)/(i/100))*P).toFixed(2);


        resultado.textContent = `${nome}, se voce aplicar R$ ${P} por mês, à taxa de jurus de ${i}% ao mês, durante ${N} meses, acumulará uma poupança de R$ ${VF}`;

    }else {
        resultado.textContent = 'Preencha todos os campos.';
        
        alert("sem dados");
    }

}


calcular.addEventListener('click', executar);
