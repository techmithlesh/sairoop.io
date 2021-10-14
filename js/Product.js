var cartItems = localStorage.getItem('cartItems');

cartItems.push(newItem);

localStorage.setItem('cartItems', cartItems);


