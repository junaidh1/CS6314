function showAboutInfo() {
    const aboutInfo = "Sweet Bee Cakes is a small family owned business that specializes " +
                      "in custom cakes for all occasions.\nWe are known for our delicious " +
                      "cakes made with the finest and healthiest ingredients.\nWe are " +
                      "also known for our great customer service.\n\nWe are here to make " +
                      "your day a little sweeter.";
    alert(aboutInfo);
  }

  function showDeliveryInfo() {
      const contactInfo = "Email us your address and we will let you know cost of shipping " +
                        "and expected arrival day.\n" +
                        "        Email: info@sweetbeecakes.com:\n\n" +
                        "Alternatively, you can pick up your order by 9PM CST at:\n" +
                        "        1234 Main St, Richardson, TX 75080";
      alert(contactInfo);
  }

  function searchProducts() {
    document.getElementById("searchIcon").addEventListener("click", function() {
        var searchFormContainer = document.getElementById("searchFormContainer");
        searchFormContainer.style.display = (searchFormContainer.style.display === "none" || searchFormContainer.style.display === "") ? "block" : "none";
    })};

    document.addEventListener("DOMContentLoaded", function() {
      const aboutLink = document.getElementById("aboutLink");
      if (aboutLink) {
        aboutLink.addEventListener("click", showAboutInfo);
      }
    
      // Example: Attaching showDeliveryInfo function to an element
      const deliveryLink = document.getElementById("deliveryLink");
      if (deliveryLink) {
        deliveryLink.addEventListener("click", showDeliveryInfo);
      }
    
      // Example: Attaching searchProducts function to an element
      const searchIcon = document.getElementById("searchIcon");
      if (searchIcon) {
        searchIcon.addEventListener("click", searchProducts);
      }
    });