class Middleware {

  constructor() {
      this.middlewares = [];
  }

  use(middleware) {
      this.middlewares.push(middleware);
  }
  executeMiddleware(data, done) {
      this.middlewares.reduceRight((done, next) => () => next(data, done), done)
          (data);
  }
  createFn(fn) {
      this.executeMiddleware(fn, done => console.log(fn));
  }
};

module.exports = Middleware;