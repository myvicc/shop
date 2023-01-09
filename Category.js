export class Category {
    name;
    id;
    goodsIds;
    constructor( name, id, goodsIds = []) {
        this.name = name;
        this.id = id;
        this.goodsIds = goodsIds;
    }
}