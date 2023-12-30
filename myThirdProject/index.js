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
                console.log(`O ${this.type} de nome ${this.name} e idade de ${this.age} anos, atacou usando ${attack}!`)
                break
            case "ninja":
                attack = "shurikens"
                console.log(`O ${this.type} de nome ${this.name} e idade de ${this.age} anos, atacou usando ${attack}!`)
                break
            case "mago":
                attack = "magia"
                console.log(`O ${this.type} de nome ${this.name} e idade de ${this.age} anos, atacou usando ${attack}!`)
                break
            case "monge":
                attack = "artes marciais"
                console.log(`O ${this.type} de nome ${this.name} e idade de ${this.age} anos, atacou usando ${attack}!`)
                break
        }
        
    }
}

//Definindo uma nova instância da classe modelada e criando um novo objeto:
let heroNinja = new Hero("Itachi", "39", "ninja")
let heroMonge = new Hero("Aang", "22", "monge")
let heroGuerreiro = new Hero("Meliodas", "25", "guerreiro")
let heroMago = new Hero("Paladino", "33", "mago")

//Chamando um método do objeto criado anteriormente:
heroNinja.attacking()
heroMonge.attacking()
heroGuerreiro.attacking()
heroMago.attacking()