let movies = JSON.parse(localStorage.getItem("movies")) || [];
function add(){
    let title=document.getElementById("title").value;
    let year=document.getElementById("year").value;
    let genre=document.getElementById("genre").value;

    let movie = {
        title:title,
        year:year,
        genre:genre,
        rating:savedRating
    };
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));

    displayy();
}

function rateToStars(rating){
    let stars = "";
    if(rating === "1"){
        stars = "☆";
    }
    else if(rating === "2"){
        stars = "☆☆";
    }
    else if(rating === "3"){
        stars = "☆☆☆";
    }
    else if(rating === "4"){
        stars = "☆☆☆☆";
    }
    else if(rating === "5"){
        stars = "☆☆☆☆☆";
    }
    else {
        stars = "";
    }

    return stars;
}

function displayy(){
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    let output="";

    for(let i = 1; i < movies.length; i++){
        let stars = rateToStars(movies[i].rating);
        output += `${movies[i].title} (${movies[i].year}) - ${movies[i].genre}, Rating: ${stars}<br/>`;
    }

    document.getElementById("list").innerHTML = output;
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
