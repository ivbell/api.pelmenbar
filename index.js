import cors from 'cors'
import express from 'express'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'
import CategoriesRouter from './routes/categories.router.js'
import GetPelmenbarRouter from './routes/get-pelmenbar.router.js'
import OrderRouter from './routes/order.router.js'
import ProductsRouter from './routes/product.router.js'
import UserRouter from './routes/user.router.js'

const URL_DB =
	'mongodb+srv://admin:admin@cluster0.jb6zy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json()) //добавляем чтение json
app.use(fileUpload({}))

//Routes
app.use('/api', CategoriesRouter)
app.use('/api', ProductsRouter)
app.use('/api', OrderRouter)
app.use('/api', UserRouter)
app.use('/api', GetPelmenbarRouter)

async function startApp() {
	try {
		await mongoose.connect(URL_DB, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
		})
		app.listen(PORT, () => console.log('App has been started, port: ' + PORT))
	} catch (error) {
		console.log(error)
	}
}

startApp()
