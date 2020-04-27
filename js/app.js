const checkBox = document.querySelector('#checkbox')

// When you add the dark mode in your system
console.log(window.matchMedia('(prefers-color-scheme: dark)'))

// Dark Mode
checkBox.addEventListener('change', function() {
  console.log(this.checked)
  if(this.checked) {
    document.body.classList.add('is-dark-mode');
    document.body.classList.remove('is-light-mode');
  } else {
    document.body.classList.remove('is-dark-mode');
    document.body.classList.add('is-light-mode');
  }
})