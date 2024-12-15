function run() {
	let htmlCode = document.getElementById("html-code").value;
	let cssCode = document.getElementById("css-code").value;
	let output = document.getElementById("output");
	output.contentDocument.body.innerHTML =
		htmlCode + "<style>" + cssCode + "</style>";
}

document.getElementById("learnButton").addEventListener("click", function () {
	var userName = document.getElementById("name").value;

	if (userName.trim() !== "") {
		document.getElementById("welcome-screen").style.display = "block";
		document.getElementById("user-name").textContent = userName;

		document.getElementById("loginForm").style.display = "none";

		setTimeout(function () {
			window.location.href = "html.html";
		}, 3000); 
	} else {
		document.getElementById("welcome-screen").style.display = "block";
		document.getElementById("user-name").textContent = "Guest";

		document.getElementById("loginForm").style.display = "none";

		setTimeout(function () {
			window.location.href = "html.html";
		}, 3000); // 2-second delay
	}
});
