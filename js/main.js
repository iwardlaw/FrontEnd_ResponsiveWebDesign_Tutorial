(function addYearToCopyright() {
	let copyright = document.getElementById("copyright");
	copyright.textContent = copyright.textContent.replace("{year}", new Date().getFullYear());
})();
