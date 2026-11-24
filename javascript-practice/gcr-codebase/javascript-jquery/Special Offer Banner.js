$(document).ready(function () {
    function getTargetBanners() {
        var selection = $("#bannerSelect").val();
        if (selection === "all") {
            return $(".offer-banner");
        }
        return $(selection);
    }

    $("#hideBtn").on("click", function () {
        getTargetBanners().hide();
    });

    $("#showBtn").on("click", function () {
        getTargetBanners().show();
    });

    $("#slideUpBtn").on("click", function () {
        getTargetBanners().slideUp(400);
    });

    $("#slideDownBtn").on("click", function () {
        getTargetBanners().slideDown(400);
    });

    $("#fadeOutBtn").on("click", function () {
        getTargetBanners().fadeOut(500);
    });

    $("#fadeInBtn").on("click", function () {
        getTargetBanners().fadeIn(500);
    });

    var rotatorBanners = $(".rotator-banner");
    var currentIndex = 0;

    setInterval(function () {
        var currentBanner = rotatorBanners.eq(currentIndex);
        currentIndex = (currentIndex + 1) % rotatorBanners.length;
        var nextBanner = rotatorBanners.eq(currentIndex);

        currentBanner.fadeOut(500, function () {
            nextBanner.fadeIn(500);
        });
    }, 5000);
});
