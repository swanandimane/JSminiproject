// Product Class (ES6)
class Product {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}

// Inventory Array
let inventory = [
    new Product("Laptop", 10),
    new Product("Mouse", 3),
    new Product("Keyboard", 15)
];

// Add Product Function
function addProduct() {
    const name = document.getElementById("productName").value;
    const qty = Number(document.getElementById("productQty").value);

    if (name === "" || qty === "") {
        alert("Please enter valid details");
        return;
    }

    inventory.push(new Product(name, qty));
    displayInventory();
    displayLowStock();

    document.getElementById("productName").value = "";
    document.getElementById("productQty").value = "";
}

// Display Inventory Table
function displayInventory() {
    const table = document.getElementById("inventoryTable");
    table.innerHTML = "";

    inventory.map(item => {
        table.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
            </tr>
        `;
    });
}

// Display Low Stock Items
function displayLowStock() {
    const lowStockList = document.getElementById("lowStockList");
    lowStockList.innerHTML = "";

    const lowStockItems = inventory.filter(item => item.quantity < 5);

    lowStockItems.forEach(item => {
        lowStockList.innerHTML += `<li>${item.name} : ${item.quantity} left</li>`;
    });
}

// Initial Load
displayInventory();
displayLowStock();
