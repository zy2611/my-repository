let currentIndex = 0;

function scrollAlbums(direction) {
    const albums = document.querySelectorAll(".album");
    const albumContainer = document.querySelector(".album-container");

    // Reset the "active" class on all albums
    albums.forEach((album) => album.classList.remove("active"));

    // Update the current index
    currentIndex += direction;

    // Loop back to the beginning or end
    if (currentIndex >= albums.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = albums.length - 1;
    }

    // Add "active" to the new current album
    albums[currentIndex].classList.add("active");

    // Update container scroll position
    albumContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}