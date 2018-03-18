const nextTime = new Date(Date.UTC(2018, 2, 19, 15, 0)).getTime()

const addZero = value => value < 10 
	? `0${value}`
	: value.toString()

const calculateTime = () => {
	const time = nextTime - Date.now()
	const seconds =
		addZero(time >= 0 ? Math.floor((time / 1000) % 60) : 0)
	const minutes =
		addZero(time >= 0 ? Math.floor((time / 1000 / 60) % 60) : 0)
	const hours =
		addZero(time >= 0 ? Math.floor((time / (1000 * 60 * 60)) % 24) : 0)
	const days =
		addZero(time >= 0 ? Math.floor(time / (1000 * 60 * 60 * 24)) : 0)
	return {
		total: time,
		seconds,
		minutes,
		hours,
		days
	}
}

const drawTimers = time => Object.keys(time).map(key =>
	document.querySelector(`[data-time="${key}"]`).innerText = time[key]
)

const interval = setInterval(() => {
	const { total, ...time } = calculateTime()

	drawTimers(time)

	if (total <= 0)
		clearInterval(interval)
}, 300)