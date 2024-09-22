// Get the district elements
const districts = document.querySelectorAll('.district');

// Add event listeners to the district elements
districts.forEach((district) => {
    district.addEventListener('click', () => {
        console.log('District clicked:', district.id);

        // Get the district id
        const districtId = district.id;

        // Hide all product lists
        document.querySelectorAll('.product-list').forEach((list) => {
            list.style.display = 'none';
        });

        // Show the product list for the selected district
        const selectedProductList = document.querySelector(`.${districtId}-products`);
        if (selectedProductList) {
            selectedProductList.style.display = 'block';
            selectedProductList.classList.add('fade-in');

            // Remove fade-in class after animation ends
            selectedProductList.addEventListener('animationend', () => {
                selectedProductList.classList.remove('fade-in');
            }, { once: true });
        } else {
            console.error('No product list found for:', districtId);
        }
    });
});
