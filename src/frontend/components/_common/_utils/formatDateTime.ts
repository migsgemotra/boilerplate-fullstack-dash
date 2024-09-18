const formatDateTime = (unformattedDate: Date): string => {
	if (!unformattedDate) {
		return ''
	}

	const date = new Date(unformattedDate)
	return `${date.toLocaleString('en-US', {
		timeZone: 'Asia/Manila',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	})}`
}

export default formatDateTime
