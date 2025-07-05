let contentdaown = document.querySelectorAll('.content-on-daown')
let icondaown = document.querySelectorAll('.card-lang')

for (let i = 0; i < icondaown.length; i++) {
  icondaown[i].addEventListener('click', () => {
    contentdaown[i].classList.toggle('content-on-daown-active')
})
}



let current = 1;
let total = 3

let move_left = document.querySelector('.move_left')
let move_right = document.querySelector('.move_right')
let card = document.querySelectorAll('.card-hover-color')
// let card2 = document.getElementById('card-2')
// let card3 = document.getElementById('card-3')


function updatecard() {
card.forEach((cards , index)=>{
  cards.classList.remove("left" , 'center' , 'right')
  if (index === current -1 ) {
   cards.classList.add("left" )
  }else if (index === current) {
    cards.classList.add('center')
  }else if (index === current +1) {
    cards.classList.add('right')
  }
})

}
function goLeft() {
  if (current > 0) {
    current--
    console.log(current);
    updatecard()
  }
}

function goRight() {
  if (current < card.length -1) {
    current++
    console.log(current);
    updatecard()
  }
}