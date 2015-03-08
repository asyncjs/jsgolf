function play(s) {
  a = {}
  s = s.split(/\W/)
  n = 0
  while(n<s.length) a[s[n++]] = s[n++]
  return a
}

// console.log(play('group=async&language=js&night=jsgolf'))
