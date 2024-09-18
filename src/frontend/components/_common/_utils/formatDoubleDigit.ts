const formatDoubleDigit = (number: number | string): string => {
	if (!number) {
		return '00'
	}

	const string = String(number)

	if (string.length === 1) {
		return `0${string}`
	}

	return string
}

export default formatDoubleDigit
