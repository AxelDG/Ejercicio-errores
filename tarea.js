function baseAltura(base, altura) {
    if (base == 0) {
        throw new Error('La base debe ser mayor a 0.');
    }
    if (altura == 0) {
        throw new Error('La altura debe ser mayor a 0');
    }
    var sumaTotal = 0;
    sumaTotal = base * altura;
    return "El resultado es: ".concat(sumaTotal);
}
try {
    var resultado = baseAltura(4, 0);
    console.log(resultado);
}
catch (error) {
    console.log("Ocurrio un error inesperado: " + error.message);
}
