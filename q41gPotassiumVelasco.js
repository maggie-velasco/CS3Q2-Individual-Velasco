let movies = JSON.parse(localStorage.getItem("movies")) || [];
function add(){
    let title=document.getElementById("title").value;
    let year=document.getElementById("year").value;
    let genre=document.getElementById("genre").value;

    if(!title || !year || !genre){
      alert("Pls fill in all of the needed information");
    }

    if(title && year && genre && savedRating === 0){
      alert("Pls enter a rating first");
      return;
    }

    let found = findingUpdate(title);
    if(found !== -1){
      movies[found].year = year;
      movies[found].genre = genre;

      let genz = Number(movies[found].rating);
      let boomer = Number(savedRating);
      movies[found].rating = Math.round((genz + boomer)/2);
    }
    else {
      let movie = {
        title:title,
        year:year,
        genre:genre,
        rating:Number(savedRating)
      };
      movies.push(movie);
    }
    localStorage.setItem("movies", JSON.stringify(movies));
    displayy();
    document.getElementById("formHEH").reset();
    savedRating = 0;
    document.getElementById("rateOutput").testContent = savedRating;
}

function findingUpdate(title){
  for(let i = 0; i < movies.length; i++){
    if(movies[i].title === title){
      return i;
    }
  }
  return -1;
}

function rateToStars(rating){
    let stars = "";
    if(rating === 1){
        stars = "☆";
    }
    else if(rating === 2){
        stars = "☆☆";
    }
    else if(rating === 3){
        stars = "☆☆☆";
    }
    else if(rating === 4){
        stars = "☆☆☆☆";
    }
    else if(rating === 5){
        stars = "☆☆☆☆☆";
    }
    return stars;
}

function displayy(){
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    let output="";

    for(let i = 0; i < movies.length; i++){
        let stars = rateToStars(movies[i].rating);
        output += `${movies[i].title} (${movies[i].year}) - ${movies[i].genre}, Rating: ${stars} <button id="deletebtn" onclick="deleting(${i})">Delete</button><br/><br/>`;
    }

    document.getElementById("list").innerHTML = output;
}

function deleting(i){
  const deleteBtn = document.getElementById("deletbtn");
  const ask = confirm("Are you sure you want to delete this movie?");
  if(ask){
    movies.splice(i,1);
    localStorage.setItem("movies", JSON.stringify(movies));
    displayy();
    alert("Movie deleted!!");
  }
}

//starss
const stars = document.querySelectorAll(".star");
const rateOutput = document.getElementById("rateOutput");
let savedRating = 0;
stars.forEach(function(star) {
  star.addEventListener("mouseover", function() {
    let starValue = star.getAttribute("data-value");
    highlightHEH(starValue);
  });

  star.addEventListener("mouseout", function() {
    highlightHEH(savedRating);
  });

  star.addEventListener("click", function() {
    savedRating = star.getAttribute("data-value");
    rateOutput.textContent = savedRating;
    highlightHEH(savedRating);
  });
});

function highlightHEH(rating) {
  stars.forEach(function(star) {
  let starValue = star.getAttribute("data-value");

  if (starValue <= rating) {
    star.classList.add("selected");
  }
  else {
    star.classList.remove("selected");
  }

});
}
