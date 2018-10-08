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
    })
})