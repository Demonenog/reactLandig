import logo1 from './../img/projectCard/project-go-travel.jpg';
import logo2Set from './../img/projectCard/project-go-travel@2x.jpg';
import arrow from './../img/svg/arrow-left.svg';

import './Style.css';

const GoTravel = () => {
	return (
		<article className='inner-page' id='GoTravel'>
			<div className='container'>
				<div className='inner-page-details'>
					<h1 className='inner-page-title'> Сайт туристического агентства </h1>
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
					alt='Сайт туристического агентства'
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

export default GoTravel;
