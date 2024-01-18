    // Function to add a new item
    function addItem() {
        var itemName = document.getElementById("itemName").value;
        var quantity = document.getElementById("quantity").value;
        var dateBought = document.getElementById("dateBought").value;
        var supplier = document.getElementById("supplier").value;
  
        // Create a new row with the item details
        var row = "<tr><td>" + itemName + "</td><td>" + quantity + "</td><td>" + dateBought + "</td><td>" + supplier + "</td><td><button type='button' class='btn btn-primary' onclick='editItem(this)'>Edit</button> <button type='button' class='btn btn-danger' onclick='removeItem(this)'>Remove</button></td></tr>";
        $("tbody").append(row);

        // Clear the input fields
        $("#itemName").val("");
        $("#quantity").val("");
        $("#dateBought").val("");
        $("#supplier").val("");
  
        // Close the modal after saving
        $('#staticBackdrop').modal("hide");
      }
  
      
      // Function to update an existing item
      function editItem(button) {
        var row = $(button).closest("tr");
        var itemName = row.find("td:eq(0)").text();
        var quantity = row.find("td:eq(1)").text();
        var dateBought = row.find("td:eq(2)").text();
        var supplier = row.find("td:eq(3)").text();
  
        // Set the input fields with the item details
        $("#itemName").val(itemName);
        $("#quantity").val(quantity);
        $("#dateBought").val(dateBought);
        $("#supplier").val(supplier);
  
        // Remove the row from the table
        row.remove();
  
        // Open the modal for adding a new item
        $("#staticBackdrop").modal("show");
      }
  
      // Function to remove an item
      function removeItem(button) {
        var row = $(button).closest("tr");
        row.remove();
      }