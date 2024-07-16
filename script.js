document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('input-show').value;
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => response.json())
        .then(data => {
            const showContainer = document.querySelector('.show-container');
            showContainer.innerHTML = ''; // 清除之前的搜索结果
            data.forEach(item => {
                const showData = document.createElement('div');
                showData.classList.add('show-data');
                showData.innerHTML = `
                    <img src="${item.show.image ? item.show.image.medium : ''}" alt="${item.show.name}">
                    <div class="show-info">
                        <h1>${item.show.name}</h1>
                        <p>${item.show.summary}</p>
                    </div>
                `;
                showContainer.appendChild(showData);
            });
        });
});
