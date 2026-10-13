const buttonEx1 = document.getElementById("exercicio1")

buttonEx1.addEventListener("click", () => {
    const num1 = Number(prompt("Informe um número"))
    const num2 = Number (prompt("Informe outro número"))

    alert(num1 + num2)
})