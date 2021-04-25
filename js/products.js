async function getApi() {
    try {
      const response = await fetch(
        "https://noroffcors.herokuapp.com/https://test.tjemsland.online/wp-json/wc/store/products"
      );
      const apiResults = await response.json();
      console.log(apiResults);
  
      apiResults.forEach((element) => {
        document.querySelector(".trending-game-card").innerHTML += `
          <img class="trending-game-image" src="${element.images[0].src}">
          <div class="trending-game-button">
            <p><a href="buygame.html?id=${element.id}">$99.99</a></p>
          </div>
        `;
      });
    } catch (error) {
    } finally {
    }
  }
  
  getApi();