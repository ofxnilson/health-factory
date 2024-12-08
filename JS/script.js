// Web Design and Client-Side Scripting
// HDCSDEV_INT
// @author Nilson Francisco

// Basket array to store items in the basket
let basket = [];

// Function to update the basket count in the navbar
function updateBasketCount() {
	const basketCount = document.getElementById('basket-count');
	basketCount.textContent = basket.reduce((total, item) => total + item.quantity, 0);
}

// Event listener for "Add to Basket" buttons
document.querySelectorAll('.add-to-basket').forEach(button => {
	button.addEventListener('click', function () {
		// Get product details
		const productName = this.getAttribute('data-name');
		const productPrice = parseFloat(this.getAttribute('data-price'));
		const productImage = this.getAttribute('data-image');
		const quantityInput = this.closest('.product-card').querySelector('.quantity-input');
		const quantity = parseInt(quantityInput.value) || 1; // Default to 1 if invalid

		// Check if item already exists in the basket
		const existingItem = basket.find(item => item.name === productName);
		if (existingItem) {
			// Update quantity of existing item
			existingItem.quantity += quantity;
		} else {
			// Add new item to basket
			basket.push({
				name: productName,
				price: productPrice,
				image: productImage,
				quantity: quantity
			});
		}

		// Update basket count
		updateBasketCount();
	});
});