const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello world? What if this is hell that we have ended up here after living a MeAniNgfUll life in some other realm??? !'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
