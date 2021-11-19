const calcular = document.getElementById('calcular');


function executar() {
    const nome = document.getElementById('nome').value;
    const valorMensal = document.getElementById('valorMensal').value;
    const taxaJurus = document.getElementById('taxaJurus').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');
    
    window. alert("Test");
    
    alert("INIT");
    alert(nome);
    alert(valorMensal);
    alert(taxaJurus);
    alert(tempo);
    

    if (nome !== '' && valorMensal !== '' && taxaJurus !== '' && tempo !== '') {
        
        alert("a");

        const P = valorMensal.toFixed(2);

        const i = (taxaJurus/100).toFixed(2);
        
        const N = tempo.toFixed(2);

        const VF = P*( (1+i)**N -1 / i ).toFixed(2);
        
        
        alert(P);
        alert(i);
        alert(N);
        alert(VF);


        resultado.textContent = `${nome}, se voce aplicar R$ ${P} por mês, à taxa de jurus de ${i} ao mês, durante ${N} meses, acumulará uma poupança de R$ ${VF}`;

    }else {
        resultado.textContent = 'Preencha todos os campos.';
        
        alert("sem dados");
    }

}


calcular.addEventListener('click', executar);
