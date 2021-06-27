// Get Element By Id
const firstClassQty = document.getElementById('first-class-qty');
const economyClassQty = document.getElementById('economy-qty');
const subTotal = document.getElementById('subtotal');
const vat = document.getElementById('vat');
const gandTotal = document.getElementById('gand-total');

// Calculate First Class Ticket Price by input Value
handleInputValueAndPrice(firstClassQty);

// Calculate Economy Class Ticket Price by input Value
handleInputValueAndPrice(economyClassQty);

// Handle Quantity by Click and Calculate Price
function handleQtyAndPrice(quantity, isIncrease) {
	const quantityValue = quantity.value;
	const counter = parseInt(quantityValue);

	let newCounter = counter;

	if (isIncrease) {
		newCounter = counter + 1;
	}
	if (!isIncrease && counter > 0) {
		newCounter = counter - 1;
	}
	quantity.value = newCounter;
	calculatePrice(firstClassQty, economyClassQty);
}

// Calculate Total Price
function calculatePrice(firstClassQty, economyClassQty) {
	const firstClassPrice = parseInt(firstClassQty.value) * 150;
	const economyClassPrice = parseInt(economyClassQty.value) * 100;

	const totalPrice = firstClassPrice + economyClassPrice;
	subTotal.innerText = totalPrice;

	const text = totalPrice * 0.1;
	vat.innerText = text;

	const grandTotal = totalPrice + text;
	gandTotal.innerText = grandTotal;
}

// function Calculate Ticket Price by input Value
function handleInputValueAndPrice(id) {
	id.addEventListener('input', () => {
		if (!id.value) {
			id.value = 0;
		}
		calculatePrice(firstClassQty, economyClassQty);
	});
}

// get element for Model
const modalBtn = document.querySelector('#book-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
const modalContainer = document.querySelector('.modal-container');
const modalContent = document.querySelector('#modal-content');

modalBtn.addEventListener('click', function () {
	modal.classList.add('open-modal');
	if (gandTotal.innerText == 0) {
		modalContent.innerText = 'Please Select a minimum of One Quantity!';
		modalContainer.classList.add('colorRed');
	} else {
		modalContent.innerText = 'Your Booking is Successful!';
		modalContainer.classList.add('colorGreen');
	}
});
closeBtn.addEventListener('click', function () {
	modal.classList.remove('open-modal');
});
