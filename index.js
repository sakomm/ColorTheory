const reqs = require('express');

const app = reqs();
const port = 5000


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});

