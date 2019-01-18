// get the text from the clicked subject dropdown and use it to change the page title
var subjects = document.querySelector('#topics');
var selected = subjects.addEventListener('click', function (e) {
  document.getElementById('page_title').innerHTML = e.target.innerText + ' Questions';
});
