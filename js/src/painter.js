class Painter {

    constructor(canvasWrapper) {
        this.cw = canvasWrapper;
        this.infoBox = new Gmt.Rectangle(5, 5, 150, 100);
        this.infoBoxColorFill = Gmt.rgba(30, 50, 30, 0.15);
        this.infoBoxColorStroke = Gmt.rgba(30, 50, 30, 0.3);
        this.textColor = Gmt.rgba(255, 255, 255, 0.5);
    }

    clear() {
        this.cw.clear();
    }

    drawInfo(loop, foodRegistry, cellRegistry) {
        this.cw.drawRect(this.infoBox, this.infoBoxColorFill, this.infoBoxColorStroke, 2);
        this.cw.write(`FPS : ${Math.round(loop.getFPS())}`, 15, 30, this.textColor, 20);
        this.cw.write(`FOOD : ${Math.round(foodRegistry.entities.length)}`, 15, 60, this.textColor, 20);
        this.cw.write(`CELLS : ${Math.round(cellRegistry.entities.length)}`, 15, 90, this.textColor, 20);
    }

    drawEntity(e) {
        this.cw.drawCircle(e.toCircle(), e.colorFill, e.colorStroke, 2);
    }

    drawEntities(entityArray) {
        entityArray.forEach(e => this.drawEntity(e));
    }

}