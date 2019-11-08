const assert = require('assert')

// escreva aqui o seu código
class User {
    constructor () {
        this._name =  ""
    }

    get name() {
        if (this._name === undefined) {
            return ""
        }
        else {
            return this._name
        }
    }
   

    set name (newName) {
       newName == undefined || null ? this._name = "" : this._name = newName
    }
}

let user1 = new User("Trybe")

assert.equal(typeof User.prototype, "object")
assert.ok(user1 instanceof User)
assert.equal(user1.name, "")

user1.name = undefined;
assert.equal(user1.name, "")

user1.name = null
assert.equal(user1.name, "")

user1.name = "Tryber"
assert.equal(user1.name, "Tryber")
