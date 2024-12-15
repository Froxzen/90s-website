document.addEventListener("DOMContentLoaded", function () {
	const hearts = document.querySelectorAll(".fa-heart");

	hearts.forEach(heart => {
		heart.addEventListener("click", function () {
			let countElement = this;
			let count = parseInt(countElement.textContent.trim());

			if (this.classList.contains("fa-regular")) {
				this.classList.remove("fa-regular");
				this.classList.add("fa-solid");
				this.style.color = "red";
				countElement.textContent = " " + (count + 1);
			} else {
				this.classList.remove("fa-solid");
				this.classList.add("fa-regular");
				this.style.color = "";
				countElement.textContent = " " + (count - 1);
			}
		});
	});
});
