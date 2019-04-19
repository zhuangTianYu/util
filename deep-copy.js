const obj = {
	age: 12,
	name: 'ming',
	parent: {
		mo: { name: 'hong' },
		fa: { name: 'gang' }
  },
  hobby: [
    { 'singsing': true },
    { 'swimming': false }
  ],
  car: null,
  gf: undefined,
  run: () => console.log('running')
}

const deepCopy = (obj) => {
	const ret = {}
	const copy = (source, assigner = ret) => {
    Object.keys(source).map(property => {
      if (typeof source[property] === 'object') {
        if (source[property] === null) {
          return Object.assign(assigner, { [property]: null })
        }
        const isArray = Array.isArray(source[property])
        Object.assign(assigner, { [property]: isArray ? [] : {} })
        return copy(source[property], assigner[property])
      }
      Object.assign(assigner, { [property]: source[property] })
    })
  }
	return copy(obj), ret
}

console.log(deepCopy(obj))


