$(document).ready(function () {
    function clearHighlights() {
        $(".member").removeClass("highlight-report highlight-selected highlight-sibling").css("background-color", "");
    }

    $(".manager").on("click", function () {
        clearHighlights();
        $(this).next(".direct-reports").children(".member").addClass("highlight-report");
    });

    $(".employee-name").hover(
        function () {
            $(this).next(".contact-info").stop(true, true).fadeIn(200);
        },
        function () {
            $(this).next(".contact-info").stop(true, true).fadeOut(200);
        }
    );

    $(".dept-header").on("click", function (event) {
        if ($(event.target).hasClass("toggle-team-btn")) {
            return;
        }
        clearHighlights();
        $(this).parent(".department").children(".team-block").children(".direct-reports").children(".member").css("background-color", "#ede9fe");
    });

    $("#randomEmployeeBtn").on("click", function () {
        clearHighlights();
        var allEmployees = $(".employee");
        var randomIndex = Math.floor(Math.random() * allEmployees.length);
        var chosen = allEmployees.eq(randomIndex);
        chosen.addClass("highlight-selected");
        chosen.siblings(".employee").addClass("highlight-sibling");
    });

    $(".toggle-team-btn").on("click", function (event) {
        event.stopPropagation();
        $(this).parent().parent().find(".team-block").slideToggle(300);
    });

    $("#resetHighlightBtn").on("click", function () {
        clearHighlights();
    });
});
