function toggleCard(card) {

    const cardDetails = card.querySelector(".card-details");

    if (cardDetails.style.display == "block") {
        cardDetails.style.display = "none";
    } else {
        cardDetails.style.display = "block";
    }

    console.log("card expanded: ", card);
};

function handleKeyPress(event, element) {
    if (event.key === "Enter") {
        event.preventDefault();
        toggleCard(element);
    }
};

// footer year
document.getElementById("year").innerHTML = new Date().getFullYear();