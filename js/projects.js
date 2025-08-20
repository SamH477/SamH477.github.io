(function () {
	window.addEventListener("load", init);

	/**
	 * Adds click listeners to each project box
	 */
	function init() {
		let projectBoxes = document.querySelectorAll(".project-box");
		for (let projectBox of projectBoxes) projectBox.addEventListener("click", openProject);
	}

	/**
	 * When a user clicks on the project box div, it will redirect them to the correct project page.
	 * If they click on the github logo, it will only open the github for that project on a separate page.
	 */
	function openProject() {
		let href = "";

		let githubButton = this.querySelector(".github");

		if (githubButton && githubButton.matches(":hover")) {
			// do not open project since github button was clicked
		} else {
			switch (this.id) {
				case "yolo-cpp-api": {
					return window.open("https://github.com/Etown-CS/FairwayFinder/wiki");
				}
				case "couple-trivia": {
					return window.open("https://pantry.etowndb.com/pantry/web_src/");
				}
				case "labshare": {
					href = "https://github.com/SamH477/Personal-Study-Website";
					break;
				}
				case "checkout-system": {
					href = "https://elizabethtown-my.sharepoint.com/:p:/g/personal/huhns_etown_edu/EdydIc99TKpDj7WYY8j8iR0BNGP3ULQrs3FVCZVX7uedoA?e=7vXqFJ";
					break;
				}
				case "amazon-affiliate-bot": {
					href = "https://elizabethtown-my.sharepoint.com/:p:/g/personal/barbierik_etown_edu/EZpPncWUU_1LnvE6Xxrl_4ABqVeN_bUKmH9D2EQFcj4mmw?e=NybXl6";
					break;
				}
				case "resell-bot": {
					href = "https://1drv.ms/p/c/e5d99bc65a9d6071/EVI46o8hoMJEiaZ-ODddo0MBuls4wuHK3v7i3HtUkKghyQ?e=JbG582";
					break;
				}
				case "techops": {
					href = "https://1drv.ms/p/c/e5d99bc65a9d6071/Eby3v55G-ThOq4nmLXKhHmcBk-1BHWWNmQ5WPjm6hbZvxA?e=XyRIPt";
					break;
				}
			}

			window.location = href;
		}
	}
})();
