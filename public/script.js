document.addEventListener("DOMContentLoaded", () => {
	// Wait for 2 seconds before removing the preloader
	setTimeout(() => {
		// Get the preloader element
		const preloader = document.getElementById("preloader");
		const spinner = document.getElementById("spinner");

		preloader.remove();
		spinner.remove();

		// Show the homepage
		const homepage = document.querySelector(".home-page");
		if (homepage) {
			homepage.style.display = "block";
		}

		// Allow scrolling
		document.body.classList.remove("hidden");
	}, 2000); // 2 seconds
});
