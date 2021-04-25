async function getApi() {
    try {
      const response = await fetch(
        "https://noroffcors.herokuapp.com/https://api.tjemsland.online/wp-json/wc/store/products"
      );
      const apiResults = await response.json();
      console.log(apiResults);
  
      apiResults.forEach((element) => {
        document.querySelector(".jacket-list__container").innerHTML += `
        <div class="jacketcard">
          <i class="far fa-heart"></i>
          <img class="jacketlistimage" src="${element.images[0].src}">
          <div class="jacket-description">
              <p>Trollveggen 100%Gore-tex</p>
          </div>
          <div class="jacketbutton">
            <p><a href="jacket.html?id=${element.id}">$250,00</a></p>
          </div>
        </div>
        `;
      });
    } catch (error) {
    } finally {
    }
  }
  
  getApi();