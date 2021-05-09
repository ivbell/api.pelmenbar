import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'
import User from '../model/User.js'

class UserService {
	async create(user) {
		const { login, password } = user
		const candidate = await User.findOne({ login })
		if (candidate) {
			throw new Error('Пользователь уже существует')
		}

		const hashedPassword = await bcryptjs.hash(password, 12)

		const createUser = await User.create({ ...user, password: hashedPassword })

		return createUser
	}

	async login(user) {
		const { login, password } = user

		const candidate = await User.findOne({ login })

		if (!candidate) {
			throw new Error('Пользователь не найден, попробуйте снова')
		}

		const isMatch = await bcryptjs.compare(password, candidate.password)

		if (!isMatch) {
			throw new Error('Логин или пароль введены не верно, попробуйте снова')
		}

		const token = jwt.sign(
			{ userId: candidate._id },
			config.get('jwt_secret'),
			{
				expiresIn: '1h',
			}
		)

		const findUser = { token, userId: candidate.id }

		return findUser
	}
}

export default new UserService()
