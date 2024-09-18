const formatDateShort = (unformattedDate: Date): string => {
	if (!unformattedDate) {
		return null
	}

	const date = new Date(unformattedDate)
	return `${date.toLocaleString('en-US', {
		timeZone: 'Asia/Manila',
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	})}`
}

export default formatDateShort
