import heroImage from '../../assets/hero-background.jpg'

const asyncHeroBackground = new Image()
const $hero = document.querySelector('.hero')

asyncHeroBackground.src = heroImage

asyncHeroBackground.onload = () => {
	$hero.classList.add('hero--loaded')
}