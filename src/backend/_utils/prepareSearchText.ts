const prepareSearchText = (searchText: string): string => {
  return searchText
    .split(' ')
    .map((string: string) => '"' + string + '"')
    .join(' ')
}

export default prepareSearchText