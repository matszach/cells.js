class FoodFactory extends _EntityFactory {

    createRandom() {
        let pos = this.positionGen.next().value;
        let r = Gmt.randInt(0, 150);
        let g = Gmt.randInt(150, 200);
        let b = Gmt.randInt(0, 100);
        let val = Gmt.randInt(St.Food.minInitialValue, St.Food.maxInitialValue);
        return new Food(pos, r, g, b, val);
    }

}