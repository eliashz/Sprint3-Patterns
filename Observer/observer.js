/**
 * 
 */
class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(o) {
        this.observers.push(o);
    }
    ubsubscribe(o) {
        this.observers = this.observers.filter(e => e!=0);
    }

    notify(model) {
        this.observers.forEach(observer => {
            observer.notify(model);
        })
    }
}

class TextSubject extends Subject {
    constructor() {
        super();
        this.text = '';
    }
    notify() {
        this.text = text;
        super.notify(this);
    }
}