class Middleware {
  constructor (){
    this.mw = [];
  }
  use(fn) {
    this.mw.push(fn);
  }
  executeMw(data, done) {
    this.mw.reduceRight((done, next) => next (data, done), done) (data);

  }
  run(data) {
    this.executeMw(data, done => console.log(data));
  }
};
 
 module.exports = Middleware;