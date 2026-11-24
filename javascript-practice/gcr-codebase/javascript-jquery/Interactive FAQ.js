$(document).ready(function () {
    $(".faq-question").on("click", function () {
        $(this).next(".faq-answer").slideToggle(250);
    });

    $(".faq-question").hover(
        function () {
            $(this).css("color", "#2563eb");
        },
        function () {
            $(this).css("color", "#1e293b");
        }
    );

    $(".faq-question").on("dblclick", function () {
        $(".faq-answer").slideUp(250);
    });

    $(".answer-input").on("focus", function () {
        $(this).closest(".faq-item").find(".faq-question").css("background-color", "#fef08a");
    });

    $(".answer-input").on("blur", function () {
        $(this).closest(".faq-item").find(".faq-question").css("background-color", "#ffffff");
    });
});
