$(document).ready(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var isDevoured = { devoured: true };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(() => {
            location.reload();
        });
    });

    $(".delete-burger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        // }).catch((err) => {
        //     if (err) {
        //         location.reload();
        //     }
        // });
        }).then(() => {
            location.reload();
        });
    });

    $(".create").on("click", function (event) {
        event.preventDefault();

        let burgerName = $("#name").val().trim();
        if (burgerName === "") burgerName = "Void Burger";

        var burger = {
            name: burgerName
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(function () {
            location.reload();
        });
    });
});

