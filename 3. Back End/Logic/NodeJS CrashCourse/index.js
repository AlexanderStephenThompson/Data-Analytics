const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((request, response) => {

    // Build file path
    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url)

    // Extension of the file
    let extensionName = path.extname(filePath)

    // Initial content type
    let contentType = 'text/html'

    // Check extension and set content type
    switch (extensionName) {
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
            contentType = 'image/jpeg'
            break
    }

    // Read file
    fs.readFile(filePath, (error, content) => {
        if (error) {
            // Error :/
            if (error.code == 'ENOENT') {
                //Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (error, content) => {
                    response.writeHead(404, { 'Content-Type': 'text/html' })
                    response.end(content, 'utf8')
                })
            }
            else {
                response.writeHead(500)
                response.end(`Error code: ${error.code}`)
            }
        }

        else{
            // Success! :D
            response.writeHead(200, { 'Content-Type': contentType })
            response.end(content, 'utf8')
        }
    })
})

    const PORT = process.env.PORT || 5000
    server.listen(PORT, () => console.log(`Server running on port ${PORT}.`))