// const list = document.querySelectorAll('.product-dots ol li')
// list.forEach(item =>{ 
//         item.addEventListener('click', (e) =>{
//         list.forEach(el=>{ el.classList.remove('product-dots--active'); });
//         item.classList.add('product-dots--active')
//     })
// })
// const list2 = document.querySelectorAll('.product-dots ol li')
// list2.forEach(item =>{ 
//         item.addEventListener('click', (e) =>{
//           list2.forEach(el=>{ el.classList.remove('product-dots--active'); });
//         item.classList.add('product-dots--active')
//     })
// })



// let list3 = document.querySelectorAll('.product')
// list3.forEach(item =>{ 
//         item.addEventListener('click', (e) =>{
//           list3.forEach(el=>{ el.classList.remove('nohide'); });
//         item.classList.add('nohide')
//     })
// })

// icecream.onclick = function() {
//   place.setAttribute("class", "hide")
// }


// let icecream = document.getElementById("icecream").classList.contains("product-dots--active");
// let cayenne = document.getElementById("cayenne").classList.contains("product-dots--active");
// let cake = document.getElementById("cake").classList.contains("product-dots--active");
// let candy = document.getElementById("candy").classList.contains("product-dots--active");
// let platters = document.getElementById("platters").classList.contains("product-dots--active");
// let dessert = document.getElementById("dessert").classList.contains("product-dots--active");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");

qq()


function qq() {
  let icecream = document.getElementById("icecream");
  let cayenne = document.getElementById("cayenne");
  let cake = document.getElementById("cake");
  let candy = document.getElementById("candy");
  let platters = document.getElementById("platters");
  let dessert = document.getElementById("dessert");

  if (icecream.classList.contains("product-dots--active") == true) {
    two.classList.remove('nohide')
    three.classList.remove('nohide')
    four.classList.remove('nohide')
    five.classList.remove('nohide')
    six.classList.remove('nohide')
    one.classList.add('nohide')
  } else if (cayenne.classList.contains("product-dots--active") == true) {
    one.classList.remove('nohide')
    three.classList.remove('nohide')
    four.classList.remove('nohide')
    five.classList.remove('nohide')
    six.classList.remove('nohide')
    two.classList.add('nohide')
  } else if (cake.classList.contains("product-dots--active") == true) {
    two.classList.remove('nohide')
    one.classList.remove('nohide')
    four.classList.remove('nohide')
    five.classList.remove('nohide')
    six.classList.remove('nohide')
    three.classList.add('nohide')
  } else if (candy.classList.contains("product-dots--active") == true) {
    two.classList.remove('nohide')
    three.classList.remove('nohide')
    one.classList.remove('nohide')
    four.classList.remove('nohide')
    six.classList.remove('nohide')
    four.classList.add('nohide')
  } else if (platters.classList.contains("product-dots--active") == true) {
    two.classList.remove('nohide')
    three.classList.remove('nohide')
    four.classList.remove('nohide')
    five.classList.remove('nohide')
    six.classList.remove('nohide')
    five.classList.add('nohide')
  } else if (dessert.classList.contains("product-dots--active") === true) {
    two.classList.remove('nohide')
    three.classList.remove('nohide')
    four.classList.remove('nohide')
    five.classList.remove('nohide')
    one.classList.remove('nohide')
    six.classList.add('nohide')
  } else {
    return
  }
}

const list = document.querySelectorAll('.product-dots ol li')
list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ 
          el.classList.remove('product-dots--active')
          qq()
          ; });
        item.classList.add('product-dots--active')
        qq()
    })
})
// document.addEventListener('click', clickEvent, false);

// $(function() {
//   $('.product-dots').click(
//     console.log('Hello'))
// })
