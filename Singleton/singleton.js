class Singleton {
    static instancia;
    scoreboard = '';

    constructor(scoreboard ='') {
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.scoreboard = scoreboard;

        return this;
    }
}  

module.exports = Singleton;