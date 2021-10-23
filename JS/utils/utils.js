export const doubleRemover = (array) => {
  array.filter(function(ele , pos){return array.indexOf(ele) == pos;})
}

// document.querySelector('.editButt').addEventListener('click', function(e) {
// let database = e.target.previousElementSibling;
// document.querySelector('#input_box').value = database.innerText;
// })
