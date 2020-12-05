function jumpingOnClouds (c) {
  // move 2 jumps if I can
  const path = [] // 1,3,4,6
  path.push(c[2] === 0 ? 2 : 1)
  let last = path[path.length - 1]// el ultimo
  while (last !== c.length - 1) {
    if (c[last + 2] === 0) {
      path.push(last + 2)
    } else if (c[last + 1] === 0) {
      path.push(last + 1)
    } else {
      console.log('thunder!')
    }
    last = path[path.length - 1]
  }
  return path.length
}

// jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])
jumpingOnClouds([0, 0, 0, 1, 0, 0])
