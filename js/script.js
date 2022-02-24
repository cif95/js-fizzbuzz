for (let i = 0; i < 101; i++) {
	let danceFloor = document.querySelector('section#dance-floor');
	let newBox = document.createElement('div');
	newBox.classList.add('my-box', 'fw-bold');
	danceFloor.append(newBox);
	newBox.addEventListener('click', function() {
		newBox.classList.add('bg-dark', 'text-white', 'fs-6');
		newBox.innerText = "Don't stop it!"
	})
	if ( (i % 3 == 0) && (i % 5 == 0)) {
		console.log('Fizzbuzz');
		newBox.innerHTML = 'FizzBuzz';
		newBox.classList.add('my-bg-80s4', 'text-black');
	} else if (i % 5 == 0) {
		console.log('Buzz');
		newBox.innerHTML = 'Buzz';
		newBox.classList.add('my-bg-80s3');
	} else if (i % 3 == 0) {
		console.log('Fizz');
		newBox.innerHTML = 'Fizz';
		newBox.classList.add('my-bg-80s2', 'text-black');
	} else {
		console.log(i);
		newBox.innerHTML = i ;
		newBox.classList.add('my-bg-80s1');
	}
}

