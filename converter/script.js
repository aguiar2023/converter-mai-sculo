function converter() {
    const palavra = document.getElementById("palavra").value.toUpperCase();
    const resultado = document.getElementById("resultado");

    if (palavra === "") {
        alert("Por favor, digite uma palavra!");
        return;
    }

    const letras = palavra.split("");
    resultado.innerHTML = "";

    for (let letra of letras) {
        resultado.innerHTML += letra + "<br>";
    }
}
function converter() {
    const palavra = document.getElementById("palavra").value.toUpperCase();
    const resultado = document.getElementById("resultado");

    if (palavra === "") {
        alert("Por favor, digite uma palavra!");
        return;
    }

    const letras = palavra.split("");
    resultado.innerHTML = "";

    for (let letra of letras) {
        resultado.innerHTML += letra + "<br>";
    }
}
