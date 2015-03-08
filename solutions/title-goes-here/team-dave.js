function play(s) {
  return s.replace(/\b./g, function(n) {
    return n.toUpperCase()
  })
}

// console.log(play("hello world"))
