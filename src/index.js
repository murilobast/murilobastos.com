// Modules
import heroModule from './modules/hero'
import headerModule from './modules/header'

// Styles
import './stylus/main.styl'

const init = () => {
	headerModule()
	window.onscroll = headerModule
}

init()