export class State {
    static state: any;

    static get() {
        return this.state;
    }

    static update(prop = {}) {
        this.state = {...this.state, ...prop} 
    }
}