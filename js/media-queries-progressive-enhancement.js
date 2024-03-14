function mediaQuery_minWidth1168px_onChange(query) {
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

let mediaQuery_minWidth1168px = window.matchMedia("(min-width: 1168px)");

mediaQuery_minWidth1168px.addEventListener("change", () => mediaQuery_minWidth1168px_onChange(mediaQuery_minWidth1168px));
