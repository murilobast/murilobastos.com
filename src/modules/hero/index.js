import heroImage from '../../assets/rocket.jpg'

const asyncHeroBackground = new Image()
const $hero = document.querySelector('.hero')

asyncHeroBackground.src = heroImage

asyncHeroBackground.onload = () => {
	$hero.classList.add('hero--loaded')
}