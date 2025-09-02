// Experimenta permitiendo que los objetos de jugadores construidos se puedan agregar a un arreglo de miembros de un grupo.

// ¿Cómo debería identificarse un arreglo de miembros del grupo en tu código?

// Intenta añadir métodos para agregar o eliminar jugadores de un grupo.
export class Group{
  constructor(code){
    this.code = code;
    this.max = 4;
    this.players = [];
  }
  playerAdd(player){
    this.players.push(player);
    player.group = this.code
  }
  
}
export class Player {
  constructor(name,level) {
   this.name =name;
   this.level = parseInt(level);
   this.exp = 0;
   this.group = null;
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

