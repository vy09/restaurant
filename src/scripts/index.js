import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

import("../public/data/DATA.json").then(({ default: jsonData }) => {
  console.log(jsonData);
  let datas = jsonData["restaurants"];
  let dataList = "";
  datas.forEach(function (data) {
    dataList += `
        <div class="card-item">
            <img class="card-item-pic" src="${data["pictureId"]}" alt="${
      data["name"]
    }" title="${data["name"]}">
              <div class="city">${data["city"]}</div>
                <p class="item_rating">
                    Rating : 
                    <a href="#" class="item_rating_value">${data["rating"]}</a>
                </p>
                <h1 class="item_title"><a href="#">${data["name"]}</a></h1>
                <div class="item_desc">${data["description"].slice(
                  0,
                  200
                )}...</div>
        </div>
        `;
  });
  document.querySelector("#data").innerHTML = dataList;
});
