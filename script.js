const calcular = document.getElementById('calcular');


function processing() {
    const nome = document.getElementById('nome').value;
    const valorMensal = document.getElementById('valorMensal').value;
    const taxaJurus = document.getElementById('taxaJurus').value;
    const duracao = document.getElementById('duracao').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && valorMensal !== '' && taxaJurus !== '' && duracao !== '') {
        
        var P = valorMensal;
        var i = taxaJurus;
        var N = duracao;
        var VF = 0;
        
        VF = (((((1 + (i/100))**N)-1)/(i/100))*P).toFixed(2);


        resultado.textContent = `${nome}, se voce aplicar R$ ${P} por mês, à taxa de jurus de ${i}% ao mês, durante ${N} meses, acumulará uma poupança de R$ ${VF}`;

    }else {
        resultado.textContent = 'Por Favor, preencha todos os campos!!';
    }

}


calcular.addEventListener('click', processing);
