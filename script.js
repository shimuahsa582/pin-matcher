// make a pin function and and random nmb convert slipt to string
function getGeneratePin() {
	const randomNumber = Math.random() * 10000;
	const pin = (randomNumber + ' ').split('.')[0];
	if (pin.length === 4) {
		return pin;
	} else {
		return getGeneratePin();
	}
}

// display generated function
function getGenerateButtonPin() {
	const pinInput = document.getElementById('pin');
	pinInput.value = getGeneratePin();
}

// calc handler
const buttonContainer = document.getElementById('digits_container').addEventListener('click', function(event) {
	const digit = event.target.innerText;
	if (isNaN(digit)) {
		// handle backspace
		// handle clear
		if (digit === 'C') {
			const typedInput = document.getElementById('typed_pin');
			typedInput.value = '';
		}
	} else {
		const typedInput = document.getElementById('typed_pin');
		typedInput.value = typedInput.value + digit;
	}
});

// submit verify pin
function verifyPin() {
	const pin = document.getElementById('pin').value;
	const typed = document.getElementById('typed_pin').value;
	if (pin === typed) {
		// const correctPin = document.getElementById('correct_pin');
		// correctPin.style.display = 'block';
		// const inCorrectPin = document.getElementById('incorrect_pin');
		// inCorrectPin.style.display = 'none';
		displayVerifyPin('block', 'none');
	} else {
		// const inCorrectPin = document.getElementById('incorrect_pin');
		// inCorrectPin.style.display = 'block';
		// const correctPin = document.getElementById('correct_pin');
		// correctPin.style.display = 'none';
		displayVerifyPin('none', 'block');
	}
}
// verify function  display
function displayVerifyPin(correctStatus, incorrectStatus) {
	const correctPin = document.getElementById('correct_pin');
	correctPin.style.display = correctStatus;
	const inCorrectPin = document.getElementById('incorrect_pin');
	inCorrectPin.style.display = incorrectStatus;
}
