// the messenger between our app and our database
const mongoose = require('mongoose')

// allow us to hide our connection secret in the process.env object
require('dotenv').config()

const source = process.env.ATLAS_CONNECTION
const PORT = process.env.PORT || 5000

// establish connection & give yourself a message so you know when its complete
mongoose.connect(source, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected");
})

// Set route path on project
app.get('/', async (req, res) => {
    res.status(200).json("App is running rigth now!")
})

app.use('/users', userRoutes)

app.listen(PORT, ()=>{
    console.log(`Successfully served on port: ${PORT}.`);
})