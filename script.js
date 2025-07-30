const productInfo = {
  bone: { title:"Bone Care", img:"images/bone-care.jpg", desc: document.querySelector("html").textContent },
  // add dcare, nutri, slim with full description strings
};
let cart = [];

function viewProduct(key) {
  const pd = productInfo[key];
  document.getElementById("pd-title").innerText = pd.title;
  document.getElementById("pd-img").src = pd.img;
  document.getElementById("pd-desc").innerText = pd.desc;
  document.getElementById("product-detail").classList.remove("hidden");
}

function addToCart() {
  const qty = parseInt(document.getElementById("pd-qty").value);
  cart.push({ title: document.getElementById("pd-title").innerText, qty });
  alert("Added to cart: " + qty + " x " + document.getElementById("pd-title").innerText);
}

// implement submitReview, show review list, etc.
