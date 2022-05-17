//Nivell 2: Decorator

@log()
@immutable()
class Example {
  @time('demo')
  doSomething() {
    //
  }
}