function submitOrder() {
    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;

    let order = [];

    if (document.getElementById("apple").checked) {
        let qty = document.getElementById("appleQty").value;
        order.push({ item: "Apple", price: 10, qty: qty });
    }
    if (document.getElementById("banana").checked) {
        let qty = document.getElementById("bananaQty").value;
        order.push({ item: "Banana", price: 5, qty: qty });
    }
    if (document.getElementById("avocado").checked) {
        let qty = document.getElementById("avocadoQty").value;
        order.push({ item: "Avocado", price: 7, qty: qty });
    }

    let orderData = { name, phone, email, order };
    localStorage.setItem("groceryOrder", JSON.stringify(orderData));

    window.location.href = "doc3_2.html";
}
