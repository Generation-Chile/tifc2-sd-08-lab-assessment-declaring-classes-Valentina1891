// Ahora te han pedido incluir un método para subir de nivel, aumentando el número de nivel en uno.

// Modifica la clase Player para que acepte un name y un level como dos argumentos separados.

// Luego define un método compartido info() que imprima:

// <name> has reached Level <level>!

// Finalmente, define un segundo método compartido llamado levelUp() que incremente el nivel del jugador.
export class Player {
  constructor(name,level) {
   this.name =name;
   this.level = level;
  }
  info(){ //Obtener información
    console.log(`${this.name} has reached Level ${this.level}!`)
  }
  levelUp(){ //Subir nivel
    this.level +=1;
  }
  
}