const calcular = document.getElementById('calcular');


function processing() {
    const nome = document.getElementById('nome').value;
    const valorMensal = document.getElementById('valorMensal').value;
    const taxaJurus = document.getElementById('taxaJurus').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && valorMensal !== '' && taxaJurus !== '' && tempo !== '') {

        const P = valorMensal.toFixed(2);

        const i = (taxaJurus/100).toFixed(2);
        
        const N = tempo.toFixed(2);

        const VF = P*( (1+i)**N -1 / i ).toFixed(2);


        resultado.textContent = `${nome}, se voce aplicar R$ ${valorMensal} por mês, à taxa de jurus de ${taxaJurus} ao mês, durante ${tempo} meses, acumulará uma poupança de R$ ${VF}`;

    }else {
        resultado.textContent = 'Preencha todos os campos.';
    }

}


calcular.addEventListener('click', processing);
