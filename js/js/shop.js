const shop = document.getElementById("shop");

function renderShop() {
  shop.innerHTML = "";

  packs.forEach(pack => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${pack.name}</h3>
      <p>💰 ${pack.price}</p>
      <button onclick="buyPack('${pack.id}')">Buy</button>
    `;
    shop.appendChild(div);
  });
}

function buyPack(id) {
  alert("Bought: " + id);
}

renderShop();
