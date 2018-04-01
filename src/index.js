// Modules
import heroModule from './modules/hero'
import headerModule from './modules/header'
import countdownModule from './modules/countdown'

// Helpers
import fontLoader from './helpers/fontLoader'

// Styles
import './stylus/main.styl'

const init = () => {
	headerModule()
	window.onscroll = headerModule
	fontLoader([{ name: 'Open Sans', weights: [400, 600, 700] }])
}

init()