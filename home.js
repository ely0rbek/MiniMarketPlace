var clothes = [
  {
    Id: 1,
    imgUrl:
      "https://cdn.sanity.io/images/fbt7an56/production/0cceeb4d7e99346761edaba8b4180f8a88173d61-433x577.png",
    title: "Shortikcha",
    price: "$19",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!",
  },
  {
    Id: 2,
    imgUrl:
      "https://cdn.sanity.io/images/fbt7an56/production/68a1201ec315d2126d75c1076aec2d67abfacc91-433x577.png",
    title: "Ishtoncha",
    price: "$89",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!",
  },
  {
    Id: 3,
    imgUrl:
      "https://cdn.sanity.io/images/fbt7an56/production/a49989fad620f1257fb3ac54679a1e403945f32e-433x577.png",
    title: "Yengsiz koylak",
    price: "$44",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!",
  },
  {
    Id: 4,
    imgUrl:
      "https://cdn.sanity.io/images/fbt7an56/production/426673b7e6244b01aa7b2e9a613e135a498b1f1c-433x577.png",
    title: "Shortik",
    price: "$34",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!",
  },
  {
    Id: 5,
    imgUrl:
      "https://cdn.sanity.io/images/fbt7an56/production/609e93ad2f4caba311f4c282f81ccb6648452c5b-577x433.png",
    title: "Tungi kiyim",
    price: "$6",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!",
  },
  {
    Id: 6,
    imgUrl:
      "https://cdn.sanity.io/images/fbt7an56/production/bf806e89b087b227ba2272fae3b14eb9de3f8859-433x577.png",
    title: "Kofta",
    price: "$47",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!",
  },
  {
    Id: 2,
    imgUrl:
      "https://cdn.sanity.io/images/fbt7an56/production/68a1201ec315d2126d75c1076aec2d67abfacc91-433x577.png",
    title: "Ishtoncha",
    price: "$89",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!",
  },
  {
    Id: 3,
    imgUrl:
      "https://cdn.sanity.io/images/fbt7an56/production/a49989fad620f1257fb3ac54679a1e403945f32e-433x577.png",
    title: "Yengsiz koylak",
    price: "$44",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!",
  },
  {
    Id: 4,
    imgUrl:
      "https://cdn.sanity.io/images/fbt7an56/production/426673b7e6244b01aa7b2e9a613e135a498b1f1c-433x577.png",
    title: "Shortik",
    price: "$34",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!",
  },
  {
    Id: 5,
    imgUrl:
      "https://cdn.sanity.io/images/fbt7an56/production/609e93ad2f4caba311f4c282f81ccb6648452c5b-577x433.png",
    title: "Tungi kiyim",
    price: "$6",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!",
  },
  {
    Id: 6,
    imgUrl:
      "https://cdn.sanity.io/images/fbt7an56/production/bf806e89b087b227ba2272fae3b14eb9de3f8859-433x577.png",
    title: "Kofta",
    price: "$47",
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magni!",
  },
];

let cardString = "";
for (let i = 0; i < clothes.length; i++) {
  let newCard = `
            <div class="card" id="card${clothes[i].Id}">
            <img
              src="${clothes[i].imgUrl}"
              style="width: 100%"
            />
            <h1>${clothes[i].title}</h1>
            <p class="price">${clothes[i].price}</p>
            <p>
              ${clothes[i].comment}
            </p>
            <p><button>Add to Cart</button></p>
          </div>
            `;
  cardString += newCard;
}
document.getElementById("allCards").innerHTML = cardString;

function Summer() {
  let cardString = "";
  for (let i = 0; i < clothes.length; i++) {
    if (clothes[i].Id > 3) {
      let newCard = `
                  <div class="card" id="card${clothes[i].Id}">
                  <img
                    src="${clothes[i].imgUrl}"
                    style="width: 100%"
                  />
                  <h1>${clothes[i].title}</h1>
                  <p class="price">${clothes[i].price}</p>
                  <p>
                    ${clothes[i].comment}
                  </p>
                  <p><button>Add to Cart</button></p>
                </div>
                  `;
      cardString += newCard;
    }
  }
  document.getElementById("allCards").innerHTML = cardString;
}
function Spring() {
  let cardString = "";
  for (let i = 0; i < clothes.length; i++) {
    if (clothes[i].title == "Shortikcha") {
      let newCard = `
                  <div class="card" id="card${clothes[i].Id}">
                  <img
                    src="${clothes[i].imgUrl}"
                    style="width: 100%"
                  />
                  <h1>${clothes[i].title}</h1>
                  <p class="price">${clothes[i].price}</p>
                  <p>
                    ${clothes[i].comment}
                  </p>
                  <p><button>Add to Cart</button></p>
                </div>
                  `;
      cardString += newCard;
    }
  }
  document.getElementById("allCards").innerHTML = cardString;
}
function Winter() {
  let cardString = "";
  for (let i = 0; i < clothes.length; i++) {
    if (clothes[i].title == "Kofta") {
      let newCard = `
                  <div class="card" id="card${clothes[i].Id}">
                  <img
                    src="${clothes[i].imgUrl}"
                    style="width: 100%"
                  />
                  <h1>${clothes[i].title}</h1>
                  <p class="price">${clothes[i].price}</p>
                  <p>
                    ${clothes[i].comment}
                  </p>
                  <p><button>Add to Cart</button></p>
                </div>
                  `;
      cardString += newCard;
    }
  }
  document.getElementById("allCards").innerHTML = cardString;
}
function Nighty() {
  let cardString = "";
  for (let i = 0; i < clothes.length; i++) {
    if (clothes[i].Id <= 2) {
      let newCard = `
                    <div class="card" id="card${clothes[i].Id}">
                    <img
                      src="${clothes[i].imgUrl}"
                      style="width: 100%"
                    />
                    <h1>${clothes[i].title}</h1>
                    <p class="price">${clothes[i].price}</p>
                    <p>
                      ${clothes[i].comment}
                    </p>
                    <p><button>Add to Cart</button></p>
                  </div>
                    `;
      cardString += newCard;
    }
  }
  document.getElementById("allCards").innerHTML = cardString;
}
// }
