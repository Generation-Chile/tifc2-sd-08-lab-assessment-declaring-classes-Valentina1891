// Ahora te han pedido mejorar tu código para que los objetos de jugador puedan definir tanto un nombre como un número de nivel.

// Modifica la clase Player para que acepte un string name y un número "level" como dos argumentos separados.

// La clave de esta propiedad en el objeto resultante debe ser "level".

export class Player {
  constructor(name,level) {
    this.name = name;
    this.level = parseInt(level);
  }
    
  }