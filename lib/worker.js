const { expose } = require("threads/worker")

function sayHello() {
  return "Hello!"
}

expose(sayHello)
