// Experimenta permitiendo que el jugador suba de nivel en base a puntos de experiencia.

// Un punto de experiencia es un número. Un jugador debería subir de nivel cuando acumule suficientes puntos.

// Intenta añadir un método para que un jugador gane una cierta cantidad de puntos de experiencia.

// ¿Cuántos puntos deberían equivaler a un nivel? ¿Cómo puedes llevar la cuenta de esto?
export class Player {
  constructor(name,level) {
   this.name =name;
   this.level = parseInt(level);
   this.exp = 0;
  }
  info(){ //Obtener información
    console.log(`${this.name} has reached Level ${this.level}!`)
  }
  levelUp(){ //Subir nivel
    this.level +=1;
  }
  expUp(exp){
    this.exp +=exp;
    while (this.exp >=this.level * 100){
      this.levelUp()
    }
  }
}


