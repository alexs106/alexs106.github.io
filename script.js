/* =================================
   SKILL CARD INTERACTIONS
================================= */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {

    card.addEventListener("click", () => {

        // Toggle the flipped state
        const isFlipped = card.classList.toggle("is-flipped");

        // Update accessibility state
        card.setAttribute("aria-expanded", isFlipped);

    });

});


/* =================================
   ASCII CAT EASTER EGG
================================= */

const cat = document.querySelector("#cat-easter-egg");

if (cat) {

    cat.addEventListener("click", () => {

        // Restart animation if clicked again
        cat.classList.remove("is-active");

        void cat.offsetWidth;

        cat.classList.add("is-active");

    });

}

const audio = document.getElementById("portfolio-audio");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", () => {

    if (audio.paused) {
        audio.play();
        playButton.innerHTML = "&#10074;&#10074;";
        playButton.setAttribute("aria-label", "Pause music");
    } else {
        audio.pause();
        playButton.innerHTML = "&#9654;";
        playButton.setAttribute("aria-label", "Play music");
    }

});

audio.addEventListener("ended", () => {
    playButton.innerHTML = "&#9654;";
    playButton.setAttribute("aria-label", "Play music");
});