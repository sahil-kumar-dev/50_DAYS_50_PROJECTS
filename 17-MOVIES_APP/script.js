const api='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dd324dd81985c5062efc81ad32ea904e&page=1';
const search_url='https://api.themoviedb.org/3/search/movie?&api_key=dd324dd81985c5062efc81ad32ea904e&query="';
const imagepath='https://image.tmdb.org/t/p/w1280';
const container=document.querySelector('.container');
fetch(api).then((Response)=>{
   return Response.json();
}).then(Response=>{
    let result=Response.results;

    result.forEach(res => {
        const image=document.createElement('img');
        image.src=imagepath+res.backdrop_path;
        container.appendChild(image)
        console.log(res.backdrop_path);
    });

});

