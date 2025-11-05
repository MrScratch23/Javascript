class Tienda {

    constructor(tBicis = [], numVentas, altaBicicleta, ventaBici, numCarretera, numMontaña, numTotal, numVenta) {
          this. tBicis = [];
          this.numVentas = numVenas;  
          this.numCarretera = numCarretera;
          this.numMontaña = numMontaña;
          this.numTotal = numTotal;
          this.numVenta = numVenta;
    }
    

    altaBicicleta(){
    }

   ventaBici() {
    }



    listadoGeneral() {
        
    }
    listadoMontania() {

    }

    listadoGeneral() {

    }


}



class Bicicleta {
    constructor(localizador, año, vendida) {
        this.localizador = localizador;
        this.año = año;
        this.vendida = false;      
    }
}

Bicicleta.prototype.toHTMLrow = function () {

}

class Carretera {
    constructor(localizador, año, vendida, numPlatos) {
        super(localizador, año, vendida)
        this.numPlatos= numPlatos;
    }
    
    metodo() {
        return valor;
    }
}

Object.setPrototypeOf(Carretera.prototype, Bicicleta.prototype);

class Montaña {
    constructor(localizador, año, vendida, numSuspensiones) {
        super(localizador, año, vendida);
        this.numSuspensiones = numSuspensiones;
    }
    
    metodo() {
        return valor;
    }
}


Object.setPrototypeOf(Montaña.prototype, Bicicleta.prototype);
