//Install express server
const express = require('express');
const path = require('path');

const app = express();
var port  = process.env.PORT || '8080';
// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist/MiniCS')));

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'dist/MiniCS/index.html'));
})

// Start the app by listening on the default Heroku port
app.listen(port, () => console.log(`API running on localhost:${port}`));