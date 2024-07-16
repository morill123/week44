document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('input-show').value;
    fetchShows(query);
});

function fetchShows(query) {
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => response.json())
        .then(data => displayShows(data));
}

function displayShows(shows) {
    const showContainer = document.querySelector('.show-container');
    showContainer.innerHTML = '';

    shows.forEach(showData => {
        const show = showData.show;
        const showElement = document.createElement('div');
        showElement.classList.add('show-data');

        const showImage = show.image ? show.image.medium : 'https://via.placeholder.com/210x295?text=No+Image';
        showElement.innerHTML = `
            <img src="${showImage}" alt="${show.name}">
            <div class="show-info">
                <h1>${show.name}</h1>
                ${show.summary}
            </div>
        `;

        showContainer.appendChild(showElement);
    });
}