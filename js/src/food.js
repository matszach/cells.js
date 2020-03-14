class Food extends _Entity {

    constructor(vertex, r, g, b, value) {
        super(vertex, r, g, b);
        this.value = value;
    }

    grow() {
        if(this.value < St.Food.maxValue) {
            this.value += St.Food.growthRate;
        }
    }

    toCircle() {
        return this.pos.toCircle(this.value * St.Food.radiusMod);
    }
}