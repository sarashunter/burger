$(function () {
    $(".devour").on("click", function (event) {
        const id = $(this).data("id");

        const newDevouredState = {
            devoured: true
        };

        console.log('ajax call to /api/burgers/' + id);
        console.log('newDevouredState is ' + newDevouredState.devoured);
        $.ajax("/api/burgers/" + id,
            {
                type: "PUT",
                data: newDevouredState
            }).then(
                function () {
                    console.log("changed devoured for id " + id + " to ", newDevouredState);
                    location.reload();
                }
            );
    });
    $(".newburger-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#ingre").val().trim(),
          devoured: false
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
})