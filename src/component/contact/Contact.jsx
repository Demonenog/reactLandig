import './Contact.css';
import tg from './../../img/svg/telegram.svg';
import wa from './../../img/svg/whatsapp.svg';
import vk from './../../img/svg/vk.svg';

const Contact = () => {
	return (
		<section className='contacts' id='contacts'>
			<div className='container'>
				<h2 className='contact-title'>Контакты</h2>
				<div className='messengers'>
					<a
						href='https://t.me/abagofplums'
						target='_blank'
						className='messenger'
					>
						<img src={tg} alt='Telegram' />
						Написать в Telegram
					</a>
					<a
						href='https://www.whatsapp.com/'
						target='_blank'
						className='messenger'
					>
						<img src={wa} alt='WhatsApp' />
						Отправить в WhatsApp
					</a>
					<a href='https://vk.com' target='_blank' className='messenger'>
						<img src={vk} alt='Вконтакте' target='_blank' />
						Связаться Вконтакте
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
