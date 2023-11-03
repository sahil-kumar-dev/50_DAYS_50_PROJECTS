const signUp = document.querySelector('.signup-btn')
const signIn = document.querySelector('.signin-btn')
const background = document.querySelector('.background')
const contentSignUp = document.querySelector('.content-signUp')
const contentSignIn = document.querySelector('.content-signIn')
const signinForm = document.querySelector('.signin-form')
const signupForm = document.querySelector('.signup-form')


signIn.addEventListener('click', () => {
	background.classList.add('left-50')
	contentSignUp.classList.add('right-0')
	contentSignIn.classList.add('left-150')
	signinForm.classList.add('right-50')
	signupForm.classList.add('left-300')
})

signUp.addEventListener('click', () => {
	background.classList.remove('left-50')
	contentSignUp.classList.remove('right-0')
	contentSignIn.classList.remove('left-150')
	signinForm.classList.remove('right-50')
	signupForm.classList.remove('left-300')
})