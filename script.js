
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.querySelector('.blog-container'),
        mainScreenImg = document.querySelector('.main-screen'),
        mainScreenTitle = document.querySelector('.text-title'),
        mainScreenDate = document.querySelector('.text-date'),
        mainScreenTopic = document.querySelector('.text-cathegory'),
        featuredPostCard = document.querySelector('.featured-post-card');

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 3; i++) {
                createFeaturedPost(data[i]);
            }
            insertMainScreenData(data[1]);
            data.map(el => createBlogPost(el))
        });


    function createBlogPost(post) {
        let card = document.createElement('div');
        let cardText = document.createElement('div');

        let cardImgContainer = document.createElement('div');
        let cardImg = document.createElement('img');
        let cardTitle = document.createElement('h3');
        let date = document.createElement('h5');

        cardImg.src = post.picture;
        cardTitle.innerHTML = post.name;
        date.innerHTML = post.date_create.substr(0, 10);

        cardImgContainer.classList.add('card-img-container');
        cardImg.classList.add('post-img');
        cardText.classList.add('card-text-container');
        cardTitle.classList.add('post-title');
        card.classList.add('blog-post');
        date.classList.add('post-date');


        card.appendChild(cardImgContainer);
        cardImgContainer.appendChild(cardImg);
        blogContainer.appendChild(card);
        card.appendChild(cardText);
        cardText.appendChild(cardTitle);
        cardText.appendChild(date);
    }


    function insertMainScreenData(data) {
        mainScreenImg.style.backgroundImage = `url(${data.picture})`
        mainScreenTitle.textContent = data.name;
        mainScreenDate.textContent = data.date_create.substr(0, 10);
        mainScreenTopic.textContent = data.topic.toUpperCase();
    }

    function createFeaturedPost(data) {
        let item = document.createElement('div'),
            imgContainer = document.createElement('div'),
            img = document.createElement('img'),
            textContainer = document.createElement('div'),
            topic = document.createElement('p'),
            title = document.createElement('h4'),
            date = document.createElement('h5');

        topic.innerText = data.topic.toUpperCase();
        title.innerText = data.name;
        date.textContent = data.date_create.substr(0, 10);
        img.style.backgroundImage = `url(${data.picture})`;

        date.classList.add('post-date');
        textContainer.classList.add('feature-text-container');
        item.classList.add('feature-card');
        imgContainer.classList.add('feature-img-container');
        topic.classList.add('feature-topic');
        title.classList.add('feature-title');

        featuredPostCard.appendChild(item);
        textContainer.appendChild(topic);
        textContainer.appendChild(title);
        textContainer.appendChild(date);
        item.appendChild(imgContainer);
        item.appendChild(textContainer);
        imgContainer.appendChild(img);
    }
});
