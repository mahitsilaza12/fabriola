const initApp = () => {
    const openButton = document.getElementById('mobile-open-button')
    const mobileBUtton = document.getElementById('mobile-menu')

    const toogleMenu = () => {
        mobileBUtton.classList.toggle('hidden')
        mobileBUtton.classList.toggle('flex')
    }

    openButton.addEventListener('click', toogleMenu)
    mobileBUtton.addEventListener('click', toogleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)