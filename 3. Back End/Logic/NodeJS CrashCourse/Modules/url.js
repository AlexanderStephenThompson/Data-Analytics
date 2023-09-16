const url = require('url')

// Create new URL object
const myURL = new URL('http://example.com:8000/hello.html?id=123&status=active')

let fullURL = myURL.href
let domain1 = myURL.host     // Includes port
let domain2 = myURL.hostname // Excludes port
let pathname = myURL.pathname

let query = myURL.search
let queryObject = myURL.searchParams // Object version of query
let addParameter = myURL.searchParams.append("abc", '123')

// Loop through
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
