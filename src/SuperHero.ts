export class SuperHero{
    health:number = 100;

    constructor(public name:string, public power:string){

    }

    attacked(damage:number){
        if(damage > this.health){
            this.health = 0;
            alert("K.O.");
        } else {
            this.health -= damage;
            console.log(`${this.name} at ${this.health}`);
        }
    }
}