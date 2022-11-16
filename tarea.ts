function baseAltura (base : number, altura : number) : any{
    if (base == 0){
        throw new Error('La base debe ser mayor a 0.');
    }
    if (altura == 0){
        throw new Error('La altura debe ser mayor a 0')
    }
        let sumaTotal: number = 0;
        sumaTotal = base * altura;
        return `El resultado es: ${sumaTotal}`;

}

try {
    let resultado = baseAltura(4,0);
    console.log(resultado);
} catch(error){
   console.log("Ocurrio un error inesperado: " + error.message);
  
}



