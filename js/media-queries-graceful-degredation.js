function mediaQuery_maxWidth1168px_onChange(query) {
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

let mediaQuery_maxWidth1168px = window.matchMedia("(max-width: 1168px)");

mediaQuery_maxWidth1168px.addEventListener("change", () => mediaQuery_maxWidth1168px_onChange(mediaQuery_maxWidth1168px));
