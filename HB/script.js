/* =========================
   OPEN LETTER
========================= */

function openLetter() {

    const letter = document.getElementById("letterContent");

    if (letter) {

        letter.classList.toggle("show");

    }

}


/* =========================
   SURPRISE
========================= */

function showSurprise() {

    const intro = document.querySelector(".surprise-intro");
    const surprise = document.getElementById("finalSurprise");

    if (intro && surprise) {

        intro.style.display = "none";

        surprise.classList.add("show");

        createHearts();

    }

}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = ["❤️", "💕", "💖", "💗", "💓"][
            Math.floor(Math.random() * 5)
        ];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top = "-50px";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        heart.style.animation =
            "fallHeart " +
            (Math.random() * 3 + 3) +
            "s linear forwards";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 6000);

    }

}


/* =========================
   ADD HEART ANIMATION
========================= */

const heartStyle = document.createElement("style");

heartStyle.innerHTML = `

@keyframes fallHeart {

    0% {

        transform: translateY(0) rotate(0deg);

        opacity: 1;

    }

    100% {

        transform: translateY(110vh) rotate(360deg);

        opacity: 0;

    }

}

`;

document.head.appendChild(heartStyle);