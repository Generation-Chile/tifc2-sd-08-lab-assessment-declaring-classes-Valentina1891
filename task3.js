// Ahora te han pedido incluir un método que imprima un mensaje en la consola anunciando una subida de nivel.

// Modifica la clase Player para que acepte un name y un level como dos argumentos separados.

// Luego define un método compartido llamado info() que imprima el siguiente string, reemplazando los dos valores:

// // <name> has reached Level <level>!

// Por ejemplo: un jugador llamado Tara en el nivel 6 debería imprimir en consola:
"Tara has reached Level 6!"
export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = parseInt(level);
  }
  info(){ //obtener información
    console.log(`${this.name} has reached Level ${this.level}!`)
  }

}
