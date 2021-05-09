import UserService from '../services/user.service.js'

class UsersController {
	async create(req, res) {
		try {
			await UserService.create(req.body)
			return res.json({ status: true, message: 'Пользователь успешно создан' })
		} catch (e) {
			return res.status(400).json(e.message)
		}
	}

	async login(req, res) {
		try {
			const user = await UserService.login(req.body)
			return res.json({ status: true, user })
		} catch (e) {
			return res.status(400).json(e.message)
		}
	}
}

export default new UsersController()
