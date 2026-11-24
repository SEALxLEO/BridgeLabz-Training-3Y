var jqV2 = jQuery.noConflict(true);
var jqV1 = jQuery.noConflict(true);

jqV1(document).ready(function () {
    jqV1("#v1Label").text(jqV1.fn.jquery);

    var slides = jqV1(".slide");
    var slideIndex = 0;

    function showSlide(index) {
        slides.removeClass("current").hide();
        slides.eq(index).addClass("current").fadeIn(300);
    }

    jqV1("#nextSlideBtn").on("click", function () {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    });

    jqV1("#prevSlideBtn").on("click", function () {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    });

    setInterval(function () {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }, 4000);

    jqV1(".widget-card").on("click", function () {
        jqV1(".widget-card").removeClass("active-widget");
        jqV1(this).addClass("active-widget");
    });
});

jqV2(document).ready(function () {
    jqV2("#v2Label").text(jqV2.fn.jquery);

    jqV2(".notify-btn").on("click", function (event) {
        event.stopPropagation();
        var card = jqV2(this).closest(".widget-card");
        jqV2("#modalTitle").text(card.data("modal-title"));
        jqV2("#modalBody").text(card.data("modal-body"));
        jqV2("#modalOverlay").css("display", "flex").hide().fadeIn(200);
    });

    jqV2("#closeModalBtn").on("click", function () {
        jqV2("#modalOverlay").fadeOut(200);
    });

    jqV2("#modalOverlay").on("click", function (event) {
        if (event.target === this) {
            jqV2(this).fadeOut(200);
        }
    });

    jqV2(".widget-card").on("mouseenter", function (event) {
        var text = jqV2(this).data("tooltip");
        jqV2("#customTooltip")
            .text(text)
            .css({ top: event.clientY + 14, left: event.clientX + 14 })
            .fadeIn(150);
    }).on("mousemove", function (event) {
        jqV2("#customTooltip").css({
            top: event.clientY + 14,
            left: event.clientX + 14
        });
    }).on("mouseleave", function () {
        jqV2("#customTooltip").fadeOut(150);
    });
});
