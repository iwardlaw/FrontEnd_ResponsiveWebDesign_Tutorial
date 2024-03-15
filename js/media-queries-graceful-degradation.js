function mediaQuery_maxWidth520px_onChange(query) {
	let blogHeader = document.querySelector(".blog header");
	if(!blogHeader?.classList) {
		return;
	}
	
	if(query.matches) {
		blogHeader.classList.add("clearfix");
	}
	else {
		blogHeader.classList.remove("clearfix");
	}
}

let mediaQuery_maxWidth520px = window.matchMedia("(max-width: 520px)");

mediaQuery_maxWidth520px.addEventListener("change", () => mediaQuery_maxWidth520px_onChange(mediaQuery_maxWidth520px));
