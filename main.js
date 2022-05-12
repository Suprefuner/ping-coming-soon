"use strict"

const btnNotify = document.querySelector(".btn-notify")
const inputEmail = document.querySelector(".input__email")
const errorMsg = document.querySelector(".err-msg")

const breakpoint = window.matchMedia("(max-width: 65em")

const mediaQuery = function (breakpoint) {
  if (breakpoint.matches) {
    btnNotify.style.marginTop = `${
      btnNotify.style.marginTop === "2rem" ? "-2rem" : "2rem"
    }`
  }
}

const submit = function () {
  errorMsg.style.opacity = "0"

  if (inputEmail.value.trim().length === 0) {
    inputEmail.style.borderColor = "var(--color-red)"
    errorMsg.textContent = "Whoops! It looks like you forgot to add your email"
    errorMsg.style.opacity = "1"
    mediaQuery(breakpoint)
    return
  }

  // 一個以上string開頭+"@"+一個以上string+"."+一個以上string
  const re = /^.+@.+\.+.+$/
  if (inputEmail.value.match(re) === null) {
    inputEmail.style.borderColor = "var(--color-red)"
    errorMsg.textContent = "Please provide a valid email address"
    errorMsg.style.opacity = "1"
    mediaQuery(breakpoint)
    return
  }

  inputEmail.style.borderColor = "green"
  inputEmail.value = ""
  mediaQuery(breakpoint)
  inputEmail.setAttribute("placeholder", "submitted")

  setTimeout(() => {
    inputEmail.setAttribute("placeholder", "Your email address...")
    inputEmail.style.borderColor = "var(--color-blue)"
  }, 2000)
}

btnNotify.addEventListener("click", submit)
inputEmail.addEventListener("keyup", function (e) {
  if (e.which === 13) submit()
})
btnNotify.addEventListener("touch", submit)
