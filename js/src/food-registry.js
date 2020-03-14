class FoodRegistry extends _EntityRegistry {

    static #INITIAL_FOOD = 500;

    init() {
        Gmt.iter1D(FoodRegistry.#INITIAL_FOOD, () => this.spawnRandom());
    }

    spawnRandom() {
        this.add(this.factory.createRandom());
    }

    onManage() {
        this.spawnRandom();
    }

    logicOnEntity(food) {
        food.grow();
    }

}