import store from "../../data/sources/redux/store";

export default class UiService { 
    constructor() {
    }

    public get getState() {
        return store.getState().UI;
    }
}