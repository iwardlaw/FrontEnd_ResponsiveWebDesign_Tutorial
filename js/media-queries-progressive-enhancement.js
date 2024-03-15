function mediaQuery_minWidth520px_onChange(query) {
	let blogHeader = document.querySelector(".blog header");
	if(!blogHeader?.classList) {
		return;
	}
	
	if(query.matches) {
		blogHeader.classList.remove("clearfix");
	}
	else {
		blogHeader.classList.add("clearfix");
	}
}

let mediaQuery_minWidth520px = window.matchMedia("(min-width: 520px)");

mediaQuery_minWidth520px.addEventListener("change", () => mediaQuery_minWidth520px_onChange(mediaQuery_minWidth520px));
