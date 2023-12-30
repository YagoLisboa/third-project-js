//Criando a variáve que não será integrada à classe para dar mais flexibilidade ao algoritmo:
var attack;

//Modelando a classe genérica Hero:
class Hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    attacking(){
        switch(this.type){
            case "guerreiro":
                attack = "espada"
                console.log(`O ${this.type} atacou usando ${attack}!`)
                break
            case "ninja":
                attack = "shuriken"
                console.log(`O ${this.type} atacou usando ${attack}!`)
                break
            case "mago":
                attack = "magia"
                console.log(`O ${this.type} atacou usando ${attack}!`)
                break
            case "monge":
                attack = "artes marciais"
                console.log(`O ${this.type} atacou usando ${attack}!`)
                break
        }
        
    }
}