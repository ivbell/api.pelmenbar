import Router from 'express'
import GetPelmenbarController from '../controllers/get-pelmenbar.controller.js'

const GetPelmenbarRouter = new Router()

GetPelmenbarRouter.post('/get-pelmenbar', GetPelmenbarController.create)
GetPelmenbarRouter.get('/get-pelmenbar', GetPelmenbarController.getAll)

export default GetPelmenbarRouter
