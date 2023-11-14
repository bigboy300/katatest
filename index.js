window.addEventListener('DOMContentLoaded', function () {
  var usernameInput = document.getElementById('username-input')
  var defaultValue = 'Default Username'

  usernameInput.value = defaultValue

  usernameInput.addEventListener('focus', function () {
    if (usernameInput.value === defaultValue) {
      usernameInput.value = ''
    }
  })

  usernameInput.addEventListener('blur', function () {
    if (usernameInput.value === '') {
      usernameInput.value = defaultValue
    }
  })
})
