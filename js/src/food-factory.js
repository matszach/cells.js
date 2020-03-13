class FoodFactory extends _EntityFactory {

    static #MIN_VALUE = 1;
    static #MAX_VALUE = 5;

    createRandom() {
        let pos = this.positionGen.next().value;
        let r = Gmt.randInt(0, 150);
        let g = Gmt.randInt(150, 200);
        let b = Gmt.randInt(0, 100);
        let val = Gmt.randInt(FoodFactory.#MIN_VALUE, FoodFactory.#MAX_VALUE);
        return new Food(pos, r, g, b, val);
    }

}