import GetPelmenbar from '../model/GetPelmenbar.js'
import MailService from '../services/mail.service.js'

class GetPelmenbarService {
	async create(phone) {
		const createGetPelmenbar = await GetPelmenbar.create(phone)
		await MailService.GetPelmenbarSendEmail(phone)

		return createGetPelmenbar
	}

	async getAll() {
		const getPelmenbarAll = await GetPelmenbar.find()
		return getPelmenbarAll
	}
}

export default new GetPelmenbarService()
