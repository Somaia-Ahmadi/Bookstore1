
/* ===== BOOKS ===== */
const books = [
  { name: "5 AM Club", price: 2000, image: "images/5AM club.png" },

  { name: "7 Habits", price: 1800, image: "images/7 habits.png" },

  { name: "1776", price: 1500, image: "images/1776.png" },

  { name: "The Alchemist", price: 2000, image: "images/alchemist.png" },

  { name: "Atomic Habits", price: 2500, image: "images/atomic habits.png" },

  { name: "Becoming", price: 3000, image: "images/becoming mechelle obama.png" },

  { name: "George Orwell", price: 1700, image: "images/george orwell.png" },

  { name: "Guns Germs Steel", price: 2200, image: "images/Guns, Germs, and Steel.png" },

  { name: "How to Win", price: 2100, image: "images/how to win.png" },

  { name: "It Ends With Us", price: 2300, image: "images/it ends with us.png" },

  { name: "Me Before You", price: 2400, image: "images/me before you.png" },

  { name: "Midnight Library", price: 2600, image: "images/midnight library.png" },

  { name: "Normal People", price: 1900, image: "images/normal people.png" },

  { name: "Pride and Prejudice", price: 2000, image: "images/pride and prejudice.png" },

  { name: "Rich Dad Poor Dad", price: 2700, image: "images/rich dad and poor.png" },

  { name: "Sapiens", price: 3000, image: "images/sapeins.png" },

  { name: "Team of Rivals", price: 2800, image: "images/team of rivals.png" },

  { name: "The Silk Road", price: 2200, image: "images/the silk road.png" },

  { name: "Think and Grow Rich", price: 2600, image: "images/think and grow rich.png" },

  { name: "You Are a Badass", price: 2100, image: "images/you are a badass.png" }
  
];

let cart = [];

/* ===== SHOW BOOKS ===== */
let container = document.getElementById("bookList");

books.forEach((b, i) => {
  container.innerHTML += `
    <div class="col-md-3 mb-3">
      <div class="book-card p-2 text-center">
        <img src="${b.image}" class="w-100">
        <h6 class="mt-2">${b.name}</h6>
        <p>${b.price} AFN</p>
        <button class="btn btn-success w-100" onclick="addToCart(${i})">
          Add to Cart
        </button>
      </div>
    </div>
  `;
});

/* ===== ADD TO CART ===== */
function addToCart(index){
  let book = books[index];

  let exist = cart.find(i => i.name === book.name);

  if(exist){
    exist.qty++;
  }else{
    cart.push({...book, qty:1});
  }

  updateCart();

  alert("Added successfully to cart"); // (optional)
}



/* ===== UPDATE CART ===== */
function updateCart(){
  let box = document.getElementById("cartItems");
  box.innerHTML = "";

  let total = 0;

  cart.forEach((item,i)=>{
    total += item.price * item.qty;
    

    box.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div>
          <small>${item.name}</small>
          <br>
          ${item.qty} x ${item.price}
        </div>


    <div class="d-flex align-items-center gap-2">
      <button onclick="decreaseQty(${i})" class="btn btn-sm btn-danger">-</button>
      <span>${item.qty}</span>
      <button onclick="increaseQty(${i})" class="btn btn-sm btn-success">+</button>
    </div>

    <button onclick="removeItem(${i})" class="btn btn-sm btn-warning ms-2">x</button>
      </div>
    `;
  });
   
  document.getElementById("total").innerText = total;
  document.getElementById("cartCount").innerText = cart.length;
}
function increaseQty(index){
  cart[index].qty++;
  updateCart();
}
function decreaseQty(index){
  if(cart[index].qty > 1){
    cart[index].qty--;
  } else {
    cart.splice(index,1);
  }
  updateCart();
}
function removeItem(index){
  cart.splice(index,1);
  updateCart();
}
/* ===== CART TOGGLE ===== */
document.getElementById("cartBtn").onclick = ()=>{
  document.getElementById("cartPanel").classList.toggle("active");
};



document.getElementById("moontheme").onclick = function () {
  document.body.classList.toggle("light-mode");
};



document.getElementById("searchInput").addEventListener("keyup", function () {

  let value = this.value.trim().toLowerCase();

  let result = books.filter(book =>
    book.name.toLowerCase().includes(value)
  );

  let container = document.getElementById("bookList");
  container.innerHTML = "";

  result.forEach((b, i) => {
    container.innerHTML += `
      <div class="col-md-3 mb-3">
        <div class="book-card p-2 text-center">
          <img src="${b.image}" class="w-100">
          <h6 class="mt-2">${b.name}</h6>
          <p>${b.price} AFN</p>

          <button class="btn btn-success w-100"
          onclick="addToCartByName('${b.name}')">
            Add to Cart
          </button>

        </div>
      </div>
    `;
  });

});