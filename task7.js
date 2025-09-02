// Experimenta permitiendo que el jugador tenga un inventario de ítems.

// Intenta añadir métodos para agregar o eliminar ítems del inventario.

// ¿Cómo puedes llevar la cuenta de la cantidad de cada ítem? ¿Qué estructura de datos necesitarías para esto?
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
   this.items =[];
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
  itemAdd(item,cant){
    let esta = false
    for (let i=0;i<this.items.length;i++)
      if (this.items[i][0]==item){
        this.items[i][1]+=cant
        esta = true
        break;
      }
    if (esta==false){
      this.items.push([item,cant])
    }
  }
  itemRev(item){
    for (let i=0;i<this.items.length;i++){
      if(this.items[i][0]==item){
        this.items[i][1]-=1
        if (this.items[i][1]==0)
          this.items.splice(i,1)
      }
    }
  }
}