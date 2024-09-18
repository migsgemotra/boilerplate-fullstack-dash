const formatYearToFourDigits = (number: number | string): string => {
	if (!number) {
		return '0000'
	}

	const dateToArray = String(number).split('')
	let dateLength = dateToArray.length

	while (dateLength < 4) {
		dateToArray.unshift('0')
		dateLength++
	}

	const stringDate = dateToArray.join('')

	return stringDate.replace(/,/g, '')
}

export default formatYearToFourDigits
