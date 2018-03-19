let app = require("./app.js").app
const http = require('http');
const PORT =process.env.PORT||8000;
let server = http.createServer(app);
server.on('error', e => console.error('**error**', e.message));
server.listen(PORT, (e) => console.log(`server listening at ${PORT}`));
