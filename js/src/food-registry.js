class FoodRegistry extends _EntityRegistry {

    init() {
        this.entities = [];
        Gmt.iter1D(St.Food.nofInitial, () => this.spawnRandom());
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