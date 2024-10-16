import './Header.css';
import logo from './../../img/logo.jpg';
import logoSet from './../../img/logo@2x.jpg';
import video from './../../video/laptop.mp4';

const Header = () => {
	return (
		<header className='header' id='header'>
			<div className='container'>
				<div className='header-row'>
					<img
						src={logo}
						alt=''
						className='header-img'
						srcSet={`${logoSet} 2x`}
					/>
					<div className='header-desc'>
						<h1 className='header-title'>Першин Дмитрий</h1>
						<p className='header-text'>
							фрилансер, веб-разработчик, <br /> создание сайтов
						</p>
						<div className='header-btns'>
							<a href='#portfolio' className='btn'>
								Портфолио
							</a>
							<a href='#contacts' className='button-outline'>
								Контакты
							</a>
						</div>
					</div>
				</div>
			</div>
			<video className='header-video' autoPlay muted loop>
				<source type='video/mp4' src={video} />
			</video>
		</header>
	);
};

export default Header;
