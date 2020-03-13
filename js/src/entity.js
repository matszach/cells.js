class _Entity {

    constructor(vertex, r, g, b) {
        this.pos = vertex;
        this.colorFill = Gmt.rgba(r, g, b, 0.3);
        this.colorStroke = Gmt.rgba(r, g, b, 0.6);
        this.expired = false;
    }

    toCircle() {
        // abstract1
    }
}