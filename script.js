// Task 1: Fetching and displaying show data on form submission
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-form').addEventListener('submit', async function(event) {
        event.preventDefault(); // Preventing default form submission behavior
        const query = document.getElementById('input-show').value; // Getting query from input field
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`); // Fetching data from API
        const shows = await response.json(); // Parsing response JSON

        const showContainer = document.querySelector('.show-container'); // Selecting the show-container div
        showContainer.innerHTML = ''; // Clearing previous search results

        // Looping through each show and creating the show-data element
        shows.forEach(show => {
            const showData = document.createElement('div');
            showData.classList.add('show-data');

            const img = document.createElement('img');
            img.src = show.show.image ? show.show.image.medium : 'https://via.placeholder.com/210x295?text=No+Image'; // Setting image source
            img.alt = show.show.name; // Adding alt attribute for accessibility
            showData.appendChild(img);

            const showInfo = document.createElement('div');
            showInfo.classList.add('show-info');

            const title = document.createElement('h1');
            title.innerText = show.show.name; // Setting show title
            showInfo.appendChild(title);

            const summary = document.createElement('div');
            summary.innerHTML = show.show.summary || '<p>No summary available</p>'; // Setting show summary
            showInfo.appendChild(summary);

            showData.appendChild(showInfo);
            showContainer.appendChild(showData); // Adding show-data to show-container
        });
    });
});
