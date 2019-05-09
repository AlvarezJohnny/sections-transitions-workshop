let part1 = document.getElementById("secs-1")
let part2 = document.getElementById("secs-2")
let part3 = document.getElementById("secs-3")
let part4 = document.getElementById("secs-4")

window.addEventListener('scroll', function() {
  console.log(window.scrollY)
  if (window.scrollY > 300) {
    part1.classList.remove('hidden')
    part1.classList.add('show')
  }
  if (window.scrollY > 550) {
    part2.classList.remove('hidden')
    part2.classList.add('show')
  }
  if (window.scrollY > 1050) {
    part3.classList.remove('hidden')
    part3.classList.add('show')
  }
  if (window.scrollY > 1900) {
    part4.classList.remove('hidden')
    part4.classList.add('show')
  }

})
