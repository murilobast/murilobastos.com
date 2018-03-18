let headerIsFixed = false
const $header = document.querySelector('.header')

const toggleHeader = () => {
	if (headerIsFixed) {
		$header.classList.add('header--fixed')
		return
	}

	$header.classList.remove('header--fixed')
}

const headerHandler = () => {
	const currentScroll = window.scrollY

	if (!headerIsFixed && currentScroll > 0) {
		headerIsFixed = true
		toggleHeader()
	} else if (headerIsFixed && currentScroll === 0) {
		headerIsFixed = false
		toggleHeader()
	}
}

export default headerHandler