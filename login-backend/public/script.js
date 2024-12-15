document.addEventListener("DOMContentLoaded", function () {
	const loginForm = document.getElementById("loginForm");
	const signupForm = document.getElementById("signupForm");

	if (loginForm) {
		loginForm.addEventListener("submit", async function (event) {
			event.preventDefault(); // Prevent the form from submitting the traditional way

			const email = document.getElementById("email").value;
			const password = document.getElementById("password").value;

			try {
				const response = await fetch("/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, password }),
				});

				const result = await response.json();

				if (response.ok) {
				} else {
					alert(result.message);
				}
			} catch (error) {
				console.error("Error:", error);
				alert("An error occurred. Please try again.");
			}
		});
	}

	if (signupForm) {
		signupForm.addEventListener("submit", async function (event) {
			event.preventDefault();

			const email = document.getElementById("email").value;
			const password = document.getElementById("password").value;

			try {
				const response = await fetch("/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, password }),
				});

				const result = await response.json();

				if (response.ok) {
					window.location.href = result.redirectUrl;
				} else {
					alert(result.message);
				}
			} catch (error) {
				console.error("Error:", error);
				alert("An error occurred. Please try again.");
			}
		});
	}
});
