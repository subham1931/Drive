const express = require('express')
const app = express();
const userRouter = require('./routes/userRoutes')
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const dotenv =require('dotenv')
dotenv.config();
const connectDb = require('./config/db')
connectDb();
// app.get('/', (req,res) => {
//     res.render('index');
// })

app.use('/user',userRouter)

app.listen(process.env.PORT);