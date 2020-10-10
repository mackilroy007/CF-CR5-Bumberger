// linking json and script together
var movieInfoArr = JSON.parse(content);
//console.table(movieInfoArr);

// generating the movie cards and button content
for (let i = 0; i < movieInfoArr.length; i++) {
    document.getElementsByClassName("content")[0].innerHTML += `
        <div class="card mb-3 m-2 bg-dark" style="max-width: 500px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <a href="${movieInfoArr[i].imdb}">
                        <img src="${movieInfoArr[i].image}" class="card-img mt-3 col-md" alt="${movieInfoArr[i].movieName} cover">
                    </a>  
                </div>
                <div class="col-md-8">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-light">${movieInfoArr[i].movieName}</h5>
                        <p class="card-text text-light">${movieInfoArr[i].description}</p>
                        <p class="card-text"><small class="text-muted">${movieInfoArr[i].release}</small></p>
                            <div class="button-box text-right mt-auto">
                                <button type="button" class="btn btn-dark ml-auto text-success">Likes 
                                    <span class="fas fa-thumbs-up text-success"></span>
                                </button>
                                <button type="button" class="btn btn-success ml-auto text-success">
                                <p class="card-text text-light circle" like-counter="${i}">${movieInfoArr[i].likes}</p>
                                </button>
                                
                            </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

//button click funciton
$(document).ready(function(){
    $("button").on("click", function(){
        var index = $(this).parent().find(".card-text").attr("like-counter");
        index = Number(index);
        movieInfoArr[index].likes += 0.1;
        var num = movieInfoArr[index].likes;
        $(this).parent().find(".card-text").html(num.toFixed(1));
    })
})