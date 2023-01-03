console.log('ceccece')
fetch("./data/moovies.json")
.then(function(response){
   return response.json()
})
.then(function(data) {
   console.log('Response json : ', data)
  

   let div = document.querySelector('.moovies')
   
   data.forEach(moovies => {
        div.innerHTML = div.innerHTML +=`
        <div class="container">
        <div class="row>
            <div class=" card col">

                  <!--Poster -->
                 <div class="card-image col">
                        <img src="${moovies.Poster}" alt="poster" />
                 </div>
                <!-- Fin de Poster -->
    
                <!-- Corps de notre carte -->
                <div class="card-body col">
                    <!-- Titre du film -->
                    <div class="card-title">
                        <h3>${moovies.Title}</h3>
                    </div>
                    <!-- Synopsis -->
                    <div class="card-excerpt">
                        <p>${moovies.Plot}</p>
                    </div>
                    <!-- Fin du corp de notre carte -->
                </div>

             </div>
        </div>
    </div>
`
   })
})