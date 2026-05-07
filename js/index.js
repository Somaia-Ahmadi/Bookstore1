
// }
let cart = 0;

// 📚 BOOK DATA (5 books each)
const books = {
  Romance: [
    { title:"The Alchemist",
     author:"Paulo Coelho",
      image:"./images/alchemist.png",
       price:1000
       },
    { title:"Pride and Prejudice",
       author:"Jane Austen",
        image:"./images/pride and prejudice.png",
        price:1200
       },
    { title:"Me Before You",
       author:"Jojo Moyes",
        image:"./images/me before you.png",
         price:900 
        },
        
    { title:"Normal People",
       author:"Nicholas Sparks",
        image:"./images/normal people.png",
         price:1100
         },
    { title:"It Ends With Us",
       author:"Erich Segal",
        image:"./images/it ends with us.png",
         price: 300
         },
          {
    title: "Atomic Habits",
    author: "James Clear",
    image: "./images/atomic habits.png",
    price: 1400
  },
  ],

  motivation: [
    { title:"Rich Dad Poor Dad",
       author:"Kiyosaki",
       image:"./images/rich dad and poor.png",
        price:1500 
      },
       {
    title: "You Are a Badass",
    author: "Jen Sincero",
    image: "./images/you are a badass.png",
    price: 1100
  },
  
    { title:"Think and Grow Rich",
       author:"Napoleon Hill",
        image:"./images/think and grow rich.png",
        price:450
       },
    { title:"Atomic Habits",
       author:"James Clear",
        image:"./images/atomic habits.png",
         price:1400 
        },
    { title:"5AM club",
       author:"Eckhart Tolle",
        image:"./images/5AM club.png",
         price:900
         },
    { title:"Becoming Mechelle Obama",
       author:"Simon Sinek",
        image:"./images/becoming mechelle obama.png",
         price:1100 
        },
  ],

  history: [
    { title:"Sapiens", 
      author:"Yuval Noah Harari",
       image:"./images/sapeins.png",
        price:1600
       },
    { title:"Guns, Germs, and Steel",
       author:"Jared Diamond",
        image:"./images/Guns, Germs, and Steel.png",
         price:1500
         },
    { title:"The Silk Roads",
       author:"Peter Frankopan",
        image:"./images/the silk road.png",
         price:1400 
        },
    { title:"1776",
       author:"David McCullough",
        image:"./images/1776.png",
         price:1300 
        },
    { title:"Team of Rivals",
       author:"Doris Goodwin",
        image:"./images/team of rivals.png",
         price:1200
         },
  ],
      selfHelp: [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "./images/atomic habits.png",
    price: 1400
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    image: "./images/7 habits.png",
    price: 1500
  },
   { title:"Think and Grow Rich",
       author:"Napoleon Hill",
        image:"./images/think and grow rich.png",
        price:450
       },
 
  {
    title: "Midnight Library",
    author: "Jay Shetty",
    image: "./images/midnight library.png",
    price: 1200
  },
  {
    title: "You Are a Badass",
    author: "Jen Sincero",
    image: "./images/you are a badass.png",
    price: 1100
  },
   { title:"Becoming Mechelle Obama",
       author:"Simon Sinek",
        image:"./images/becoming mechelle obama.png",
         price:1100 
        },
],
};


// SHOW BOOKS FUNCTION
function showBooks(category) {

  const container = document.getElementById("bookContainer");
  const title = document.getElementById("categoryTitle");

  title.innerText = "Category: " + category;
  container.innerHTML = "";

  let selected = books[category];

  if (!selected) {
    container.innerHTML = "<p>No books found</p>";
    return;
  }

  selected.forEach(book => {

    container.innerHTML += `
      <div class="col-6 col-md-4 col-lg-2 "  style="padding-left=50px">
        <div class="book-card text-center">

          <img src="${book.image}" class=" img-fluid mb-2" style="height:200px">

          <h6>${book.title}</h6>
          <small>${book.author}</small>
          <p>${book.price} AFN</p>

          <a href="./cart.html" class="btn btn-success w-100 mt-2 add-to-cart">
            Add to Cart
          </a>

        </div>
      </div>
    `;
  });


}

function displayCart() {
  let container = document.getElementById("cart-items");
  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div>
          <p>${item.name}</p>
          <small>${item.price}</small>
        </div>

        <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
        <span>${item.quantity}</span>
        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>

        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
}

// CHANGE QTY
function changeQty(index, change) {
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  displayCart();
}

// REMOVE
function removeItem(index) {
  cart.splice(index, 1);
  displayCart();
}



// dark mode
const themeBtn = document.getElementById("moontheme");
const icon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    icon.classList.remove("far fa-moon");
    icon.classList.add(" fa-moon");
  } else {
    icon.classList.remove("	fa-moon");
    icon.classList.add("far fa-moon");
  }
});