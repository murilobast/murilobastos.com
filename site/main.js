(function ($d) {
	const $header = document.querySelector('.header')

	window.onscroll = () => {
		if (window.scrollY > 0)
			$header.classList.add('header--fixed')
		else
			$header.classList.remove('header--fixed')
	}
})(document)