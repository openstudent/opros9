const x = require('express');
const app = x();

app.all(/./, r => r.res.send('one'));
app.all('/a', r => r.res.send('two'));

app.listen(process.env.PORT);
