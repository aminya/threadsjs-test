"use babel"

import { spawn } from "threads"
import * as BrowserImplementation from "threads/dist/master/implementation.browser"
const implementation = BrowserImplementation
getWorkerImplementation = implementation.getWorkerImplementation
const Worker = getWorkerImplementation().default



async function main() {
  const sayHello = await spawn(new Worker("./worker.js"))
  aton.notifications.addInfo(sayHello())
  return sayHello
}

module.exports = main()
