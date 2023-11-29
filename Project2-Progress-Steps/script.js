const progressbars = document.querySelectorAll('.progressbar')
const steps = document.querySelectorAll('.step')
const buttons = document.querySelectorAll('.button')
const buttonnext = document.querySelector('.button.next')
const buttonprev = document.querySelector('.button.reset')


let currentActive = 0

buttons.forEach((button) => {
    button.addEventListener('click' , () => {
      
        if(button.classList.contains('next')) {
            currentActive++
            console.log('first-check '+ currentActive)
            if (currentActive > steps.length) {
                currentActive--
            }
            updateProgressBar()
        }
        else {
            currentActive--
            if (currentActive < 0) {
                currentActive = 0
            }
            updateProgressBar()
        }

        if(currentActive == steps.length) {
            buttonnext.classList.add('disabled')
        } else if(currentActive == 0) {
            buttonprev.classList.add('disabled')
        } else {
            buttonnext.classList.remove('disabled')
            buttonprev.classList.remove('disabled')
        }
    })
})

function updateProgressBar() {
    steps.forEach((step, stepindex) => {
        if(stepindex < currentActive) {
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })

    progressbars.forEach((progressbar, barindex) => {
        if(barindex < currentActive) {
            progressbar.classList.add('active')
        } else {
            progressbar.classList.remove('active')
        }
    })
}

