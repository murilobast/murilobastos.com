// Modules
import heroModule from './modules/hero'
import headerModule from './modules/header'
import countdownModule from './modules/countdown'

// Styles
import './stylus/main.styl'

const init = () => {
	headerModule()
	window.onscroll = headerModule
}

init()