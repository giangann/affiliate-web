const camelToSnakeCase = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)

const filterOptions = (array, reason, detail) => {
  const cloneArray = JSON.parse(JSON.stringify(array))
  const index = cloneArray.indexOf(
    cloneArray.find((item) => JSON.stringify(item) == JSON.stringify(detail.option))
  )
  if (reason == 'selectOption') {
    cloneArray.splice(index, 1)
  } else if (reason == 'removeOption') {
    cloneArray.push(detail.option)
  }
  return cloneArray
}

const defaultValueAutocomplete = (data = '') => {
  const arrayData = data.split(',')
  const value = []
  arrayData.map((item) => {
    return value.push({
      value: item,
      label: item
    })
  })
  return value
}

const convertDataforApi = (data = []) => {
  let value = ''
  data.map((item, index) => {
    let comma = ', '
    if (index >= data.length - 1) {
      comma = ''
    }
    value += item.label + comma
  })
  return value
}

export {
  camelToSnakeCase,
  filterOptions,
  defaultValueAutocomplete,
  convertDataforApi,
}
