const PORT = process.env.PORT || 8087;
const app = require('./index');

app.listen(PORT, () => {
    console.log(`Server started and listening to ${PORT}`);
});

module.exports = app;