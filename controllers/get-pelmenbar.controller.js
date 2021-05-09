import GetPelmenbarService from '../services/get-pelmenbar.service.js'

class GetPelmenbarController {
	async create(req, res) {
		try {
			await GetPelmenbarService.create(req.body)
			return res.json({ status: true })
		} catch (e) {
			return res.status(400).json(e.message)
		}
	}

	async getAll(req, res) {
		try {
			const getAll = await GetPelmenbarService.getAll()
			return res.json(getAll)
		} catch (e) {
			return res.status(400).json(e.message)
		}
	}
}

export default new GetPelmenbarController()
