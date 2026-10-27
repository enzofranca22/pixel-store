
function simularCompra() {
    let quantidadeMouse = Number(prompt("Quantos mouses gamers você deseja?"));
    
    let quantidadeHeadset = Number(prompt("Quantos headsets Pixel você deseja?"));
    
    let quantidadeTeclado = Number(prompt("Quantos teclados mecânicos você deseja?"));

    
    if (
        !Number.isInteger(quantidadeMouse) || quantidadeMouse < 0 ||
        !Number.isInteger(quantidadeHeadset) || quantidadeHeadset < 0 ||
        !Number.isInteger(quantidadeTeclado) || quantidadeTeclado < 0
    ) {
        alert("Digite quantidades inteiras e não negativas.");
        return;
    }

    
    if (
        quantidadeMouse === 0 &&
        quantidadeHeadset === 0 &&
        quantidadeTeclado === 0
    ) {
        alert("Você não selecionou nenhum produto.");
        return;
    }


    
    let totalMouse = quantidadeMouse * 79.90;
    let totalHeadset = quantidadeHeadset * 129.90;
    let totalTeclado = quantidadeTeclado * 159.90;

    let totalCompra = totalMouse + totalHeadset + totalTeclado;

    
    alert(
        "Resumo da compra:\n\n" +
        "Mouse Gamer: " + quantidadeMouse + " unidade(s) - R$ " + totalMouse.toFixed(2) + "\n" +
        "Headset Pixel: " + quantidadeHeadset + " unidade(s) - R$ " + totalHeadset.toFixed(2) + "\n" +
        "Teclado Mecânico: " + quantidadeTeclado + " unidade(s) - R$ " + totalTeclado.toFixed(2) + "\n\n" +
        "TOTAL: R$ " + totalCompra.toFixed(2)
    );

}

