class FoodRegistry extends _EntityRegistry {

    static #INITIAL_FOOD = 500;
    static #FOOD_SPAWN_CHANCE = 0.8;

    init() {
        Gmt.iter1D(FoodRegistry.#INITIAL_FOOD, () => this.spawnRandom());
    }

    spawnRandom() {
        this.add(this.factory.createRandom());
    }

    onManage() {
        if(Gmt.chance(FoodRegistry.#FOOD_SPAWN_CHANCE)) {
            this.spawnRandom();
        }
    }

    logicOnEntity(food) {
        food.grow();
    }

}