import formatDoubleDigit from './formatDoubleDigit'
import formatYearToFourDigits from './formatYearToFourDigits'

const formatDateForTextField = (unparsedDate: string | Date | number): string => {
	if (!unparsedDate) {
		return
	}
	const unparsedDateFormat: Date = new Date(unparsedDate)
	const year = unparsedDateFormat.getFullYear()

	const month = unparsedDateFormat.getMonth() + 1
	const day = unparsedDateFormat.getDate()

	return `${formatYearToFourDigits(year)}-${formatDoubleDigit(month)}-${formatDoubleDigit(day)}`
}

export default formatDateForTextField
