import logo1 from './../img/projectCard/project-panto-full.jpg';
import logo2Set from './../img/projectCard/project-panto-full@2x.jpg';
import arrow from './../img/svg/arrow-left.svg';

import './Style.css';

const Panto = () => {
	return (
		<article className='inner-page' id='Panto'>
			<div className='container'>
				<div className='inner-page-details'>
					<h1 className='inner-page-title'> Сайт магазина мебели </h1>
					<div className='inner-page-text'>
						<p>
							Верстка многостраничного сайта. Главная, страница с услугами,
							карта проезда с формой обратной связи, страница со статьей.
						</p>

						<p className='inner-page-link'>
							Адрес сайта:{' '}
							<a href='#' target='_blank'>
								site.com
							</a>
						</p>
					</div>
				</div>
				<img
					className='inner-page-img'
					src={logo1}
					alt='Сайт магазина мебели'
					srcSet={`${logo2Set} 2x`}
				/>
				<a href='#header' className='inner-page-backlink'>
					<img src={arrow} alt='Назад на главную' />
					Назад на главную
				</a>
			</div>
		</article>
	);
};

export default Panto;
