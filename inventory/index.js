class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalPrice() { return this.price * this.quantity; }
}

class Inventory {
    constructor() { this.items = []; }
    addItem(item) { this.items.push(item); }
    removeItem(name) { this.items = this.items.filter(i => i.name !== name); }
    getInventoryValue() { return this.items.reduce((s, i) => s + i.getTotalPrice(), 0); }
}

const inventory = new Inventory();

// Элементүүдээ JS-д холбох
const addBtn = document.getElementById("addBtn");
const nameInput = document.getElementById("itemName");
const priceInput = document.getElementById("itemPrice");
const quantityInput = document.getElementById("itemQuantity");
const list = document.getElementById("list");
const totalSpan = document.getElementById("total");

function render() {
    list.innerHTML = "";
    inventory.items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="item-info">
                <strong>${item.name}</strong>
                <span>$${item.price} x ${item.quantity}</span>
            </div>
            <div class="item-total">$${item.getTotalPrice()}</div>
            <button class="btn-delete" onclick="deleteItem('${item.name}')">Устгах</button>
        `;
        list.appendChild(li);
    });
    totalSpan.textContent = inventory.getInventoryValue();
}

// Нэмэх товчны үйлдэл
addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const price = Number(priceInput.value);
    const qty = Number(quantityInput.value);

    if (name && price > 0 && qty > 0) {
        inventory.addItem(new Item(name, price, qty));
        nameInput.value = "";
        priceInput.value = "";
        quantityInput.value = "";
        render();
    } else {
        alert("Мэдээллээ бүрэн оруулна уу!");
    }
});

// Устгах функц
window.deleteItem = (name) => {
    inventory.removeItem(name);
    render();
};
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    // dark-theme class-ийг нэмэх/хасах
    body.classList.toggle('dark-theme');
    
    // Товчлуурын дүрсийг солих
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = '☀️'; // Dark mode бол нар харуулна
    } else {
        themeToggle.textContent = '🌙'; // Light mode бол сар харуулна
    }
});
