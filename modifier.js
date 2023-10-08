function captalize(collection, Attribuit) {
  if (typeof collection[0] == 'object') {
    let result = collection.map((obj) => {
      let letterUper = obj[Attribuit].charAt(0).toUpperCase();
      let letterlower = obj[Attribuit].slice(1)
      obj[Attribuit] = letterUper + letterlower
      return obj
    })
    return result;
  } else {
    return captalizeVector(collection);
  }
}
function ordenate(collection, attribuit) {
  return attribuit ? collection.sort((a, b) => {
    return typeof a[attribuit] == 'number' ? a[attribuit] - b[attribuit] : a[attribuit].localeCompare(b[attribuit])
  }) : collection.sort((a, b) => {
    return typeof a[attribuit] == 'number' ? a - b : a[attribuit].localeCompare(b)
  })
}
function captalizeVector(vector) {
  let modified = []
  for (let i = 0; i < vector.length; i++) {
    let letterUper = vector[i].charAt(0).toUpperCase();
    let letterlower = vector[i].slice(1)
    let letterCaptalized = letterUper + letterlower
    modified[i] = letterCaptalized
  }
  return modified
}

function upper(vector) {
  let modified = []
  for (let i = 0; i < vector.length; i++) {
    modified[i] = vector[i].toUpperCase();
  }
  return modified
}
export default { captalize, ordenate, upper };