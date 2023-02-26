export class State {
    constructor() {
        this.state = {};
    }

    static get() {
        return this.state;
    }

    static update(prop = {}) {
        this.state = {...this.state, ...prop} 
    }
}