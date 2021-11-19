const calcular = document.getElementById('calcular');


function executar() {
    const nome = document.getElementById('nome').value;
    const valorMensal = document.getElementById('valorMensal').value;
    const taxaJurus = document.getElementById('taxaJurus').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');
    
    window.alert("Test");
    
    alert("INIT");
    alert(nome);
    alert(valorMensal);
    alert(taxaJurus);
    alert(tempo);
    

    if (nome !== '' && valorMensal !== '' && taxaJurus !== '' && tempo !== '') {
        
        alert("a");
        
        var P = 0;
        var i = 0;
        var N = 0;
        var VF = 0;

        P = valorMensal.toFixed(2);

        i = (taxaJurus/100).toFixed(2);
        
        N = tempo.toFixed(2);

        VF = P*( (1+i)**N -1 / i ).toFixed(2);
        
        
        alert(P);
        alert(i);
        alert(N);
        alert(VF);


        resultado.textContent = `teste`;

    }else {
        resultado.textContent = 'Preencha todos os campos.';
        
        alert("sem dados");
    }

}


calcular.addEventListener('click', executar);
