export class Pokemon {
    name: String;
    id: Number;
    image: String;
    type: String;
    hp: Number;
    attack: Number;
    defense: Number;
    idAuthor: Number;
    created_at: Date;
    updated_at: Date

    constructor(){
        this.name = '';
        this.id = 0;
        this.image = '';
        this.type = '';
        this.hp=0;
        this.attack = 0;
        this.defense = 0;
        this.idAuthor = 0;
        this.created_at = new Date()
        this.updated_at = new Date()
    }
}