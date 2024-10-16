import './Portfolio.css';
import proj1 from './../../img/portfolio/project-01.jpg';
import proj1Set from './../../img/portfolio/project-01@2x.jpg';
import proj2 from './../../img/portfolio/project-02.jpg';
import proj2Set from './../../img/portfolio/project-02@2x.jpg';
import proj3 from './../../img/portfolio/project-03.jpg';
import proj3Set from './../../img/portfolio/project-03@2x.jpg';

const Portfolio = () => {
	return (
		<main>
			<section className='portfolio' id='portfolio'>
				<div className='container'>
					<h2 className='portfolio-title'> Портфолио</h2>
					<div className='projects'>
						<article className='project'>
							<a href='#Panto'>
								<img
									src={proj1}
									alt='Сайт магазина мебели'
									className='project-img'
									srcSet={`${proj1Set} 2x`}
								/>
							</a>
							<h3 className='project-title'>
								<a href='#!'>Сайт магазина мебели </a>
							</h3>
						</article>
						<article className='project'>
							<a href='#GoTravel'>
								<img
									src={proj2}
									alt='Сайт туристического агентства'
									className='project-img'
									srcSet={`${proj2Set} 2x`}
								/>
							</a>
							<h3 className='project-title'>
								<a href='#!'>Сайт туристического агентства</a>
							</h3>
						</article>
						<article className='project'>
							<a href='#LoftHouse'>
								<img
									src={proj3}
									alt='Сайт жилого комплекса'
									className='project-img'
									srcSet={`${proj3Set} 2x`}
								/>
							</a>

							<h3 className='project-title'>
								<a href='#!'> Сайт жилого комплекса</a>
							</h3>
						</article>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Portfolio;
