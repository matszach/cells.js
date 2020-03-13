class _EntityRegistry {

    constructor(factory) {
        this.factory = factory;
        this.entities = [];
    }

    init() {
        // abstract
    }

    logicOnEntity(e) {
        // abstract
    }
    
    manage() {
        this.cull();
        this.entities.forEach(e => this.logicOnEntity(e));
        this.onManage();
    }

    onManage() {
        // abstract
    }

    cull() {
        this.entities = this.entities.filter(e => !e.expired);
    }

    add(e) {
        this.entities.push(e);
    }

} 