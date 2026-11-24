$(document).ready(function () {
    var quotes = [
        "Believe you can and you are halfway there.",
        "Success is the sum of small efforts repeated day in and day out.",
        "Start where you are. Use what you have. Do what you can.",
        "The secret of getting ahead is getting started.",
        "Consistency turns ordinary effort into extraordinary results."
    ];
    var quoteIndex = 0;

    function getTimeBasedGreeting() {
        var hour = new Date().getHours();
        if (hour < 12) {
            return "Good Morning, Visitor!";
        } else if (hour < 17) {
            return "Good Afternoon, Visitor!";
        } else {
            return "Good Evening, Visitor!";
        }
    }

    $("#greeting").text(getTimeBasedGreeting());

    $("#changeGreetingBtn").on("click", function () {
        $("#greeting").text(quotes[quoteIndex]);
        quoteIndex = (quoteIndex + 1) % quotes.length;
    });

    $("#toggleMessageBtn").on("click", function () {
        $("#welcomeMessage").toggle(300);
    });

    $("#greeting").on("click", function () {
        alert("Current Greeting: " + $(this).text());
    });
});
