document.addEventListener('DOMContentLoaded', function () {
    // Delete button click event
    var deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var productId = this.getAttribute('data-id');
            confirmDelete(productId);
        });
    });

    function confirmDelete(productId) {
        if (confirm("Are you sure you want to delete this product?")) {
            // Send AJAX request to delete the product
            fetch(`/api/products/${productId}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to delete the product');
                    }
                    // Optionally, you can handle the success response here
                    console.log('Product deleted successfully');
                    // Reload the page or update the UI as needed
                    location.reload();
                })
                .catch(error => {
                    console.error(error.message);
                    // Handle the error as needed
                });
        }
    }

    function addNewProduct() {
        // Add logic to handle adding a new product
        console.log("Adding a new product");
    }
});

  