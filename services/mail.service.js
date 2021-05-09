import nodemailer from 'nodemailer'

const userEmail = 'source@pelmenbar.ru'
const passEmail = 'Wp3B4LN47h**5Jz'
const smtServer = 'smtp.beget.com'
const orderEmailSend = 'bellivan64@gmail.com'
const getpelmenbarEmailSend = 'bellivan64@gmail.com'
const smtPort = 25

class MailService {
	async sendOrder(order, id) {
		let transporter = nodemailer.createTransport({
			host: smtServer,
			port: smtPort,
			secure: false,
			auth: {
				user: userEmail,
				pass: passEmail,
			},
		})
		await transporter.sendMail({
			from: `"PelmenBar" ${userEmail}`,
			to: orderEmailSend,
			subject: `Новый заказ на сайте pelmenbar.ru № ${id}`,
			html: `Товары: ${order.product} <br>
             Доставка: ${order.delivery} <br>
             Имя: ${order.name} <br>
             Телефон: ${order.phone} <br>
             Адрес доставки: ${order.adress} <br>
             На сумму(<strong>проверьте!</strong>): ${order.sum} <br>
             Оплата: ${order.payment}`,
		})
	}

	async GetPelmenbarSendEmail(phone) {
		let transporter = nodemailer.createTransport({
			host: smtServer,
			port: smtPort,
			secure: false,
			auth: {
				user: userEmail,
				pass: passEmail,
			},
		})

		await transporter.sendMail({
			from: `"PelmenBar" ${userEmail}`,
			to: getpelmenbarEmailSend,
			subject: `Заявка со страницы франшизы`,
			html: `Телефон: ${phone.phone}`,
		})
	}
}

export default new MailService()
