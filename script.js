let currentPage = 0;
const pages = document.querySelectorAll('.page');
const playBtn = document.getElementById('playBtn');

// Play button action
playBtn.addEventListener('click', () => {
    pages[0].classList.remove('active');
    pages[1].classList.add('active');
});

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.toggle("active", i === index);
    });
}

// Move to the next page
function nextPage() {
    pages[currentPage].classList.remove('active');
    currentPage++;
    pages[currentPage].classList.add('active');
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

document.getElementById("playBtn").addEventListener("click", function() {
    currentPage = 1;
    showPage(currentPage);
});

// Handle 'Yes' or 'No' answer for Valentine
function valentineAnswer(answer) {
    if (answer === 'no') {
        dodgeNoButton();
    } else {
        alert("Yay! I'm your Valentine! 💖");
    }
}

function dodgeNoButton() {
    const noButton = document.getElementById("noButton");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}