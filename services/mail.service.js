import nodemailer from 'nodemailer'

class MailService {
  async sendOrder(order, id) {
    const user = {user: 'source@pelmenbar.ru', pass: 'Wp3B4LN47h**5Jz'}

    let transporter = nodemailer.createTransport({
      host: 'smtp.beget.com',
      port: 25,
      secure: false,
      auth: {
        user: user.user,
        pass: user.pass,
      },
    })

    await transporter.sendMail({
      from: '"PelmenBar" <source@pelmenbar.ru',
      to: 'bellivan64@gmail.com',
      subject: `Новый заказ на сайте pelmenbar.ru № ${id}`,
      html: `Товары: ${order.product} <br>
             Доставка: ${order.delivery} <br>
             Имя: ${order.name} <br>
             Телефон: ${order.name} <br>
             Адрес: ${order.adress} <br>
             На сумму(<strong>проверьте!</strong>): ${order.sum}`,
    })
  }
}

export default new MailService()