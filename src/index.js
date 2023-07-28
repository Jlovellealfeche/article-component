const avatarContainer = document.querySelector(".avatar-details");
const activeContainer = document.querySelector(".active");
const linkButton = document.querySelector(".link-btn");
const shareButton = document.querySelector(".share-btn");

linkButton.addEventListener("click", () => {
    avatarContainer.style.display ="none";
    activeContainer.classList.remove("hidden");
})