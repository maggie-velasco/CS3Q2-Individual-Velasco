let movies = JSON.parse(localStorage.getItem("movies")) || [];
function add(){
    let title=document.getElementById("title").value;
    let year=document.getElementById("year").value;
    let genre=document.getElementById("genre").value;

    let movie = {
        title:title,
        year:year,
        genre:genre
    };
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));

    displayy();
}

function displayy(){
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    let output="";

    for(let i = 1; i < movies.length; i++){
        output += `${movies[i].title} (${movies[i].year}) - ${movies[i].genre}, Rating: <br/>`;
    }

    document.getElementById("list").innerHTML = output;
}


const star=document.querySelectorAll(".star");
const rateOutput=document.getElementById("rateOutput");

let savedRating = 0

stars.forEach((star,index) => {
    star.onmouseover = function (){
        // this.style.transform = "scale(1.2)";
        // this.style.transition = "transform 0.5s ease";
        // this.style.color = "gold";
        stars.forEach((s, i) => {
            if(i < index){
                s.style.color = "gold";
            }
            else {
                s.style.color = "gray";
            }

            if(i < index){
                s.style.transform = "scale(1.2)";
            }
            else {
                s.style.transform= "scale(1)";
            }
            s.style.transition = "transform 0.3s ease";
        });
    };
    star.onmouseout = function(){
        // this.style.transform = "scale(1)";
        // this.style.color = "gray";
        stars.forEach((s, i) => {
            if(i < savedRating){
                s.style.color = "gold";
            }
            else {
                s.style.color = "gray";
            }
            s.style.transform = "scale(1)";
        });
    };
    star.onclick = function(){
        // const rating = this.getAttribute("data-value");
        // rateOutput.value = rating;
        // stars.forEach((s, a) => {
        //     s.classList.toggle("selected", a < rating);
        //     s.style.color = a < rating ? "gold" : "gray";
        // });

        // star.forEach((s,i) =>{
        //     s.style.color = i < savedRating ? "gold" : "gray";
        // })
        
        savedRating = index + 1;
        ratingValue.textContent = savedRating;
        
        for (let i = 0; i < stars.length; i++) {
            if(i < savedRating){
                s.style.color = "gold";
            }
            else {
                s.style.color = "gray";
            }
        }
    };
});

// form.onsubmit = function(){
//     const formData = {};
//     const input = form.querySelectorAll("input");
//     for(let i = 0; i<input.length; i++){
//         formHEH[input.title]=input.value;
//         formHEH[input.year]=input.value;
//         formHEH[input.genre]=input.value;
//     }
// }

// localStorage.setItem("movieTitle", JSON.stringify(title));
// localStorage.setItem("movieYear", JSON.stringify(year));
// localStorage.setItem("movieGenre", JSON.stringify(rate));

/* 
result=[];
for(let key in testCases){
    answer=[];
    let movie=testCases[key].movie;
    let year=testCases[key].year;

    console.log()
}
*/


