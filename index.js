
class heroi {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {

        let weapon

        if (this.type === "mago") {
            weapon = "magia"
        } else if (this.type === "guerreiro") {
            weapon = "espada"
        } else if (this.type === "monge") {
            weapon = "artes marciais"
        } else if (this.type === "ninja") {
            weapon = "shuriken"
        }

        console.log(`O ${this.type} atacou usando ${weapon}`)
    }
}

h1 = new heroi("Dr. Estranho", 50 , "mago")
h2 = new heroi("Conan", 30 , "guerreiro")
h3 = new heroi("Anciã", 100 , "monge")
h4 = new heroi("Shang-Chi", 20 , "ninja")

h1.attack()
h2.attack()
h3.attack()
h4.attack()
