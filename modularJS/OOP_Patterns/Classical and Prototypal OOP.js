// CLASSICAL PROTOTYPAL //

function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
};

var Person = function (name) {
    this.name = name;
};

Person.prototype.sayName = function () {
    console.log("Hi my name is " + this.name);
};

Person.prototype.shoutName = function () {
    console.log("Hi my name is " + this.name + "!");
};

var john = new Person("John");
var bobby = new Person("Bobby");

var Musician = function (name, instrument) {
    Musician.super_.call(this, name);
    this.instrument = instrument;
};

inherits(Musician, Person);

Musician.prototype.getInstrument = function () {
    console.log(this.instrument);
};

Musician.prototype.shoutName = function () {
    console.log("DUDE! my name is " + this.name + "!!");
};

var julia = new Musician("Julia", "Flute");






// PROTOTYPAL PATTERN //

var human = {
    species: "Human",
    create: function (values) {
        var instance = Object.create(this);
        Object.keys(values).forEach(function (key) {
            instance[key] = values[key];
        });
        return instance;
    },
    saySpecies: function () {
        console.log(this.species);
    },
    sayName: function () {
        console.log(this.name);
    }
};

var musician = human.create({
    species: "musician",
    playInstrument: function () {
        console.log("PLAY DAT " + this.instrument);
    }
});

var Ivan = musician.create({ name: "Ivan", instrument: "Keyboard" });
Ivan.playInstrument();