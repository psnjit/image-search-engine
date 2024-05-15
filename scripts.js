const ACCESS_KEY= "BvYGVwbpfKw1z6JmUYL6CieNgjNKg9NwG4sFANUAezE";
const URL= "https://api.unsplash.com/search/photos";

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const searchBtn = document.getElementById('search-btn');
const showMoreBtn = document.getElementById('show-more-btn');

let keyword= "";
let page= 1;

async function searchImage(){
    keyword= searchBox.value;
    const completeURL= `${URL}?page=${page}&query=${keyword}&client_id=${ACCESS_KEY}&per_page=12`;
    const response = await fetch(completeURL);
    const data = await response.json();
    const results= data.results;
    results.map((result)=>{
        const image= document.createElement("img");
        image.src=result.urls.small;
        const imageLink= document.createElement("a");
        imageLink.href= result.links.html;
        imageLink.target = '_blank';
        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
        showMoreBtn.style.display="block";
    })
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page=1;
    searchResult.innerHTML="";
    searchImage();
});

showMoreBtn.addEventListener('click', ()=>{
    page++;
    searchImage();
})