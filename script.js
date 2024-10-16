function runInitialState() {
    const ratingCard = document.querySelector('.card');

    // initial state of card
    ratingCard.innerHTML =
    `
        <img class="card__star" src="./images/icon-star.svg" alt="A star icon">
        <h3 class="card__heading">How did we do?</h3>
        <p class="card__context">
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <div class="card__buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
        </div>
        <button class="card__submit-btn">Submit</button>
    `
;
}
// creates card component on DOM load
runInitialState();

// check for rating
let rating = null

const ratingBtn = document.querySelectorAll('.card__buttons button');

ratingBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        rating = btn.innerHTML
    })
})

// submit & load thanks state
const submitBtn = document.querySelector('.card__submit-btn');

submitBtn.addEventListener('click', () => {
    rating && thankState()
})

function thankState() {
    const ratingCard = document.querySelector('.card');

    ratingCard.innerHTML =
    `
        <img class="card__image center" src="./images/illustration-thank-you.svg" alt="A POS success transaction icon">
        <p class="card__selection center">
            You selected ${rating} out of 5
        </p>
        <h3 class="card__heading center">Thank you</h3>
        <p class="card__context center">
            We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
    `
}