const $Spotify = document.querySelector('.spotify');
const $test = document.querySelector('.test');

$test.addEventListener('click', () => {
  fetch('http://localhost:3000/test', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => console.log(data))
})
