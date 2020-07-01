const image1 = document.querySelector(".img1")
const image2 = document.querySelector(".img2")
const message = document.querySelector("h1")

document.querySelector(".btn").addEventListener("click", function () {
	let randomNumber1 = Math.floor(Math.random() * 6) + 1;
	let randomNumber2 = Math.floor(Math.random() * 6) + 1;

	image1.setAttribute("src", `images/dice${randomNumber1}.png`);
	image2.setAttribute("src", `images/dice${randomNumber2}.png`);

	decideWinner(randomNumber1, randomNumber2);
	reset()
});

// decide winner
function decideWinner(randomNumber1, randomNumber2) {
	if (randomNumber1 > randomNumber2) {
		message.innerHTML = "🚩 Hurrayy!! Player 1 Wins!";
	} else if (randomNumber2 > randomNumber1) {
		message.innerHTML = "🚩 Hurrayy!! Player 2 Wins! ";
	} else {
		message.innerHTML = "Draw for You Two!!";
	}
}


function reset() {
	setTimeout(() => {
		message.innerHTML = "Play Again";
		image1.setAttribute("src", "images/dice6.png")
		image2.setAttribute("src", "images/dice6.png")
	}, 3000);
}