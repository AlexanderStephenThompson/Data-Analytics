const os = require('os');

let platform = os.platform()
let CPU = os.arch()
let CPUCore = os.cpus() // Can also use the .length method to see how many cores you have
let Memory = os.freemem()
let TotalMemory = os.totalmem()
let Home = os.homedir()
let upTime = os.uptime() // In seconds