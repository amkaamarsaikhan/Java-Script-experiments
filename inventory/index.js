// ======= CLASS =======
class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(name) {
    this.items = this.items.filter(item => item.name !== name);
  }

  getInventoryValue() {
    return this.items.reduce(
      (sum, item) => sum + item.getTotalPrice(),
      0
    );
  }
}

// ======= DOM =======
const inventory = new Inventory();

const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const totalSpan = document.getElementById("total");

// ======= UI update =======
function render() {
  list.innerHTML = "";

  inventory.items.forEach(item => {
    const li = document.createElement("li");

    // эхлээд fade-in төлөв
    li.classList.add("fade-in");

    li.innerHTML = `
      <strong>${item.name}</strong><br/>
      price: $${item.price} | piece: ${item.quantity}<br/>
      total: $${item.getTotalPrice()}
      <br/>
      <button>delete</button>
    `;

    // delete animation
    li.querySelector("button").addEventListener("click", () => {
      li.classList.add("fade-out");

      // animation дууссаны дараа устгах
      setTimeout(() => {
        inventory.removeItem(item.name);
        render();
      }, 300);
    });

    list.appendChild(li);

    // дараагийн frame дээр fade-in эхлүүлэх
    requestAnimationFrame(() => {
      li.classList.remove("fade-in");
    });
  });

  totalSpan.textContent = inventory.getInventoryValue();
}


// ======= EVENT =======
addBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const price = Number(priceInput.value);
  const quantity = Number(quantityInput.value);

  if (!name || price <= 0 || quantity <= 0) {
    alert("must to fill all!");
    return;
  }

  const item = new Item(name, price, quantity);
  inventory.addItem(item);

  nameInput.value = "";
  priceInput.value = "";
  quantityInput.value = "";

  render();
});
