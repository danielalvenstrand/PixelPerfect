export class Component {
    /**
     * The Component super class extends classes with a DOM element reference.
     * @param element - the element reference in the DOM. Default null.
     */
    constructor(element = null) {
        this.elementRef = element;
    }
}