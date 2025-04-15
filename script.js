// Esperamos al envío del formulario
document.getElementById("formCalculadora").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que se recargue la página
    
    // Variables
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado;
    
    // Función para calcular
    function calcular(n1, n2, op) {
        if (op === "sumar") {
            return n1 + n2;
        } else if (op === "restar") {
            return n1 - n2;
        } else if (op === "multiplicar") {
            return n1 * n2;
        } else if (op === "dividir") {
            if (n2 === 0) {
                return "Error: no se puede dividir por cero";
            }
            return n1 / n2;
        } else {
            return "Operación no válida";
        }
    }

    // Llamamos la función
    resultado = calcular(num1, num2, operacion);

    // Mostramos el resultado
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
});
