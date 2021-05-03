import Router from 'express'
import UsersController from '../controllers/user.controller.js'

const UserRouter = new Router()

UserRouter.post('/register', UsersController.create)
UserRouter.post('/login', UsersController.login)

export default UserRouter
