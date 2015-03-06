// 71 chars

play=p=function (s) {
  return s.replace(/\b./g, p.call.bind(s.toUpperCase))
}
