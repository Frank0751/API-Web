const searchButton = document.getElementById("search-button")

searchButton.addEventListener("click", () => {
    const searchTerm = document.getElementById("searchQuery").value;

    fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=8cee277f628b44c4804740136527de2c&pageSize=30`)
        .then(function (response) {
            // console.log(response.body);
            return response.json();
        })
        .then(function (data) {
            // console.table(data.articles);
            document.querySelector('#articles').innerHTML = '';
            for (const article of data.articles) {
                // console.log(article)
                const articleDiv = document.createElement('div'); //create a div
                const articleH1 = document.createElement('h1'); //create h1
                articleH1.textContent = article.title; //text content of h1 = the article title
                articleDiv.appendChild(articleH1); //put h1 into the Div
                // document.querySelector('#articles').appendChild(articleDiv); //append inner div in html

                const articleP = document.createElement('p')
                articleP.textContent = article.description;
                articleDiv.appendChild(articleP);

                const articleImg = document.createElement('img');
                articleImg.setAttribute('src', article.urlToImage);
                articleImg.setAttribute('alt', article.title);
                articleImg.classList.add('article-img')
                articleDiv.appendChild(articleImg)


                document.querySelector('#articles').appendChild(articleDiv)
            }
        })

})