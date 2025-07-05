let mains1 = document.querySelector(".mains1");
let mains2 = document.querySelector(".mains2");
let mains3 = document.querySelector(".mains3");
let mains4 = document.querySelector(".mains4");

fetch("/cardAPI/serves")
  .then((response) => response.json())
  .then((data) => {
    // مصفوفة UI
    let ui = data[0];
    ui.forEach((uis) => {
      cardui(uis);
    });

    // مصفوفة Frontend
    let front = data[1];
    front.forEach((fronts) => {
      cardfront(fronts);
    });

    // مصفوفة Backend
    let back = data[2];
    back.forEach((bacts) => {
      cardback(bacts);
    });

    // مصفوفة Database
    let database = data[3];
    database.forEach((datas) => {
      carddata(datas);
    });
  });

// UI
function cardui(uis) {
  let lang1 = uis.lang1;
  postui(uis);

  function postui(uis) {
    let htmlCard = 
      `<div class="one_card">
        <div class="heade">
          <img src="${uis.img1}" alt="">
          <p class="lang_in_card">${uis.title1}</p>
        </div>
        <div class="framework">
          <p>TOOls</p>
          <p>- ${lang1.join("<br>"+ "-" )}</p>
        </div>
      </div>`;
    mains1.innerHTML += htmlCard;
  }
}

// Frontend
function cardfront(fronts) {
  let lang2 = fronts.lang2;
  postfront(fronts);

  function postfront(fronts) {
    let htmlCardback = 
    `  <div class="one_card">
        <div class="heade">
          <img src="${fronts.img2}" alt="">
          <p class="lang_in_card">${fronts.title2}</p>
        </div>
        <div class="framework">
          <p>framework</p>
          <p>- ${lang2.join("<br>"+ "-" )}</p>
        </div>
      </div>`;
    mains2.innerHTML += htmlCardback;
  }
}

// Backend
function cardback(bacts) {
  let lang3 = bacts.lang3;
  postback(bacts);

  function postback(bacts) {
    let htmlCardback = 
      `<div class="one_card">
        <div class="heade">
          <img src="${bacts.img3 }" alt="">
          <p class="lang_in_card">${bacts.title3}</p>
        </div>
        <div class="framework">
          <p>framework</p>
          <p>- ${lang3.join("<br>"+ "-" )}</p>
        </div>
      </div>`;
    mains3.innerHTML += htmlCardback;
  }
}


// database
function carddata(datas) {
  let lang4 = datas.lang4;
  postdata(datas);

  function postdata(datas) {
    let htmlCardback = 
      `<div class="one_card">
        <div class="heade">
          <img src="${datas.img4 }" alt="">
          <p class="lang_in_card">${datas.title4}</p>
        </div>
        <div class="framework">
          <p>Type</p>
          <p>- ${lang4.join("<br>"+ "-" )}</p>
        </div>
      </div>`;
    mains4.innerHTML += htmlCardback;
  }
}