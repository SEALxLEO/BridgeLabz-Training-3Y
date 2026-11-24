$(document).ready(function () {
    $(".product-card[data-discount]").each(function () {
        var discountValue = $(this).attr("data-discount");
        $(this).css({
            "border-color": "#f59e0b",
            "box-shadow": "0 0 0 2px rgba(245, 158, 11, 0.25)"
        });
        $(this).find(".price").after('<span class="badge" style="background:#fef3c7;color:#92400e;margin-right:6px;">' + discountValue + '% OFF</span>');
    });

    $(".product-card").on("click", function () {
        if ($(this).data("stock") === "out") {
            var productName = $(this).find("h2").text();
            alert(productName + " is currently out of stock!");
            return;
        }
        $(this).toggleClass("highlighted");
    });

    $(".product-card").hover(
        function () {
            $(this).find(".product-details").stop(true, true).slideDown(200);
        },
        function () {
            $(this).find(".product-details").stop(true, true).slideUp(200);
        }
    );

    $(".favorite-btn").on("click", function (event) {
        event.stopPropagation();
        $(this).toggleClass("selected");
    });
});
