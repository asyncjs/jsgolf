function play(){
  f="Fizz"
  b="Buzz"
  a=""
  n=1
  while(n++<100) {
    x=!(n%3)
    y=!(n%5)
    a+=(x&&y?f+b:x?f:y?b:n)+"\n"
  }
  return a
}

// console.log(play())
