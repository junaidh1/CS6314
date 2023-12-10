window.onload = function () {
    console.log("starting the data fetch");
    createTable();
};

function createTable() {
    // Step 1: Make a GET request to get a list of product IDs
    fetch("/api/cart/")
        .then((response) => {
            // Check if the response is successful (status code 200)
            if (!response.ok) {
                throw new Error(
                    `Failed to retrieve product IDs: ${response.status}`
                );
            }

            // Parse the response JSON
            return response.json();
        })
        .then((productIds) => {
            // Step 2: Make a GET request for each product ID to get more information
            var i = 1;
            var sum = 0;
            addTableHeader()
            productIds.cart.forEach((prodId) => {
                const productInfoUrl = `/api/products/${prodId.product_id}`;

                fetch(productInfoUrl)
                    .then((infoResponse) => {
                        // Check if the response is successful
                        if (!infoResponse.ok) {
                            throw new Error(
                                `Failed to retrieve information for product ID ${prodId}: ${infoResponse.status}`
                            );
                        }

                        // Parse the response JSON
                        return infoResponse.json();
                    })
                    .then((productInfo) => {
                        // Process the product information
                        console.log(
                            `Product ID: ${prodId.product_id}, Product Information:`,
                            productInfo.product
                        );

                        // under here is where we insert into the table
                        // Step 1: Get reference to the table
                        var table = document.getElementById("cart-table");

                        // Step 2: Create a new row and cells
                        var newRow = table.insertRow();

                        // Step 3: Populate cells with data
                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        var cell4 = newRow.insertCell(3);
                        var cell5 = newRow.insertCell(4);
                        var cell6 = newRow.insertCell(5);
                        var cell7 = newRow.insertCell(6);
                        var button = document.createElement("button");
                        button.innerHTML = "Remove";
                        button.name = prodId.product_id;
                        button.className = "btn btn-danger btn-sm rowButton";
                        cell7.appendChild(button);
                        button.addEventListener("click", function (event) {
                            //alert("button clicked")
                            var clickedButton = event.target;
                            var buttonInfo = clickedButton.name;
                            console.log(buttonInfo + " this is the name attr");
                            deleteGame(buttonInfo);
                            // in the future it could be the delete row function
                        });
                        cell1.innerHTML = i;
                        cell2.innerHTML = productInfo.product.name;
                        cell3.innerHTML = productInfo.product.price;
                        cell4.innerHTML = prodId.quantity;
                        cell5.innerHTML =
                            Math.round(
                                prodId.quantity *
                                    productInfo.product.price *
                                    100
                            ) / 100;
                        cell6.innerHTML = prodId.product_id;
                        sum += parseFloat(cell5.innerHTML);
                        i++;

                        // Step 4: Insert the new row into the table
                        // You can use other methods like insertBefore() or appendChild() based on your requirements
                        // In this example, appendChild() is used
                        table.appendChild(newRow);
                        document.getElementById("final-total").innerHTML =
                            Math.round(sum * 100) / 100;
                        document.getElementById("final-subtotal").innerHTML =
                            Math.round(sum * 100) / 100;
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            });
        })
        .catch((error) => {
            console.error(error);
        });
}
function removeRow() {
    // Here we will re draw the table
    // first delete the table

    //var tableBody = document.getElementById("cart-table").getElementsByTagName('tbody')[0]
    $("#cart-table tr").remove();

    // now we will redraw the table rows with the updated table quantities
    createTable();
}
function deleteGame(id) {
    $.ajax({
        url: "/api/cart/" + id,
        type: "DELETE",
        success: function (response) {
            console.log("delete was good");
            removeRow();
        },
        error: function (error) {
            console.log("delete was bad");
            console.log(error);
        },
    });
}

function addTableHeader() {
    // Get the table element
    var table = document.getElementById('cart-table');

    // Create a thead element
    var thead = document.createElement('thead');

    // Create a header row
    var headerRow = document.createElement('tr');

    // Add header cells with content
    var headerCell1 = document.createElement('th');
    headerCell1.textContent = '#';

    var headerCell2 = document.createElement('th');
    headerCell2.textContent = 'Product';

    var headerCell3 = document.createElement('th');
    headerCell3.textContent = 'Quantity';

    
    var headerCell4 = document.createElement('th');
    headerCell4.textContent = 'Total';

        
    var headerCell5 = document.createElement('th');
    headerCell5.textContent = 'Product Number';

    var headerCell6 = document.createElement('th');
    headerCell6.textContent = 'Remove';

    // Append header cells to the header row
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    headerRow.appendChild(headerCell3);
    headerRow.appendChild(headerCell4);
    headerRow.appendChild(headerCell5);
    headerRow.appendChild(headerCell6);

    // Append the header row to the thead element
    thead.appendChild(headerRow);

    // Append the thead element to the table
    table.appendChild(thead);
  }



console.log("reading from external file");
