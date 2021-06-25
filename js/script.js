// NAVIGATION
function toggleMenu() {
    var x = document.getElementById('barmenu')
    if (x.className === "topnav") {
        x.className += " active";
    } else {
        x.className = "topnav";
    }
}

// CITATIONS
const citeButtons = document.querySelectorAll('[data-modal-target]')
const closeCiteButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const copyCiteButtons = document.querySelectorAll(['[data-modal-copy]'])

citeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeCiteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

copyCiteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        CopyToClipboard(modal)
    })
})

function openModal(modal){
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function CopyToClipboard(modal){
    if (modal == null) return
    var r = document.createRange();
    r.selectNode(modal.querySelector(".modal-body"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Entry copied")
}

function closeModal(modal){
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
