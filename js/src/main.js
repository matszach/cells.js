$(window).ready(() => {

    let canvas = new Gmt.CanvasWrapper('canvas-home');
    let painter = new Painter(canvas);
    let generator = positionGenerator(canvas);
    let foodFactory = new FoodFactory(generator);
    let foodRegistry = new FoodRegistry(foodFactory);
    let cellFactory = new CellFactory(generator);
    let cellRegistry = new CellRegistry(cellFactory, foodRegistry);

    foodRegistry.init();
    cellRegistry.init();

    new Gmt.Loop(60, loop => {
        foodRegistry.manage();
        cellRegistry.manage();
        painter.clear();
        painter.drawFoods(foodRegistry.entities);
        painter.drawCells(cellRegistry.entities);
        painter.drawInfo(loop, foodRegistry, cellRegistry);
    }).start();

});