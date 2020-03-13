/**
 * Random in-current canvas Vertex generator
 * @param {Gmt.CanvasWrapper} canvasWrapper 
 * @returns {Gmt.Vertex} 
 */
function* positionGenerator(canvasWrapper) {
    while(true) {
        let rect = canvasWrapper.getBoundingRect();
        yield new Gmt.Vertex(
            Gmt.randFloat(0, rect.width),
            Gmt.randFloat(0, rect.height)
        );
    }
}
