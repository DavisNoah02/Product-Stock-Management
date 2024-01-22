    // Function to add a new item in Jquery
    // function addItem() {
    //     var itemName = document.getElementById("itemName")
    //     var quantity = document.getElementById("quantity")
    //     var dateBought = document.getElementById("dateBought")
    //     var supplier = document.getElementById("supplier")

    //     // checking if any input fields are empty
    //     if(itemName == "" || quantity == "" || dateBought == "" ||supplier == ""){
    //       alert("Please fill in all input fields");
    //       return;
    //     }
    //     // alternative
    //   //   if (!itemName || !quantity || !dateBought || !supplier) {
    //   //     alert("Please fill in all fields.");
    //   //     return;
    //   // }
  
    //     // Create a new row with the item details
    //     var row = "<tr><td>" + itemName + "</td><td>" + quantity + "</td><td>" + dateBought + "</td><td>" + supplier + "</td><td><button type='button' class='btn btn-primary' onclick='editItem(this)'>Edit</button> <button type='button' class='btn btn-danger' onclick='removeItem(this)'>Remove</button></td></tr>";
    //     $("tbody").append(row);

    //     // Clear the input fields
    //     $("#itemName").val("");
    //     $("#quantity").val("");
    //     $("#dateBought").val("");
    //     $("#supplier").val("");
  
    //     // Close the modal after saving
    //     $('#staticBackdrop').modal("hide");
    //   }

    // Function to add a new item in pure javascript
      function addItem() {
        // Get values from input fields
        var itemNameInput = document.getElementById("itemName")
        var quantityInput = document.getElementById("quantity")
        var dateBoughtInput = document.getElementById("dateBought")
        var supplierInput = document.getElementById("supplier")
    
        // Extract values from input fields
        var itemName = itemNameInput.value.trim();
        var quantity = quantityInput.value.trim();
        var dateBought = dateBoughtInput.value.trim();
        var supplier = supplierInput.value.trim();
    
        if(itemName == "" || quantity == "" || dateBought == "" ||supplier == ""){
                alert("Please fill in all input fields");
                return;
              }
    
        // Create a new row with the item details
        var newRow = document.createElement("tr");

        // creating the item details cells
        var itemNameSpace = document.createElement("td");
        itemNameSpace.textContent = itemName;
        newRow.appendChild(itemNameSpace);

        var quantitySapce = document.createElement("td");
        quantitySapce.textContent = quantity;
        newRow.appendChild(quantitySapce);

        var dateBoughtSpace = document.createElement("td");
        dateBoughtSpace.textContent = dateBought;
        newRow.appendChild(dateBoughtSpace);

        var supplierSpace = document.createElement("td");
        supplierSpace.textContent = supplier;
        newRow.appendChild(supplierSpace);
    
        // Creating and appending buttons in a td element
        var actionsCell = document.createElement("td");
        var editButton = document.createElement("button");
        
         // Edit button 
        editButton.setAttribute("type", "button");
        editButton.setAttribute("class", "btn btn-primary");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
            editItem(editButton);
        });
    // Remove button  
        var removeButton = document.createElement("button");
        removeButton.setAttribute("type", "button");
        removeButton.setAttribute("class", "btn btn-danger");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function () {
            removeItem(removeButton);
        });

   
        actionsCell.appendChild(editButton);
        actionsCell.appendChild(document.createTextNode(" "));
        actionsCell.appendChild(removeButton);
        newRow.appendChild(actionsCell);
    
        // Appending the new row to the tbody
        var tbody = document.querySelector("tbody");
        tbody.appendChild(newRow);
    
        // Clear the input fields
        itemNameInput.value = "";
        quantityInput.value = "";
        dateBoughtInput.value = "";
        supplierInput.value = "";
    
        // Close the modal after saving
        var modal = document.getElementById('staticBackdrop');
        var modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
      }
      
      // Function to update an existing item in JQuery
      function editItem(editButton) {
        var row = $(editButton).closest("tr");
        var itemName = row.find("td:eq(0)").text();
        var quantity = row.find("td:eq(1)").text();
        var dateBought = row.find("td:eq(2)").text();
        var supplier = row.find("td:eq(3)").text();
  
        // Set the input fields with the item details
        document.getElementById("itemName").value = itemName;
        document.getElementById("quantity").value = quantity;
        document.getElementById("dateBought").value = dateBought;
        document.getElementById("supplier").value = supplier;
        
        // alternative in JQUERY to setinput fields with item  details
        // $("#itemName").val(itemName);
        // $("#quantity").val(quantity);
        // $("#dateBought").val(dateBought);
        // $("#supplier").val(supplier);

        // Remove the row from the table
        row.remove();
  
        // Open the modal for adding a new item
        $("#staticBackdrop").modal("show");

        console.log("Editing item:", {
          itemName: itemName,
          quantity: quantity,
          dateBought: dateBought,
          supplier: supplier
      });
      }
  
      // Function to remove an item
      function removeItem(removeButton) {
        var row = $(removeButton).closest("tr");
        row.remove();
      }