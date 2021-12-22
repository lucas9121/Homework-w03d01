class Hamster {
    constructor(){
        this.owner = '';
        this.name = '';
        this.price = 15;
    }
    wheelRun(){
        console.log('Squeak, Squeak');
    }
    eatFood(){
        console.log('nibble, nibble');
    }
    getPrice(){
        return this.price;
    }
}
