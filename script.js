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
