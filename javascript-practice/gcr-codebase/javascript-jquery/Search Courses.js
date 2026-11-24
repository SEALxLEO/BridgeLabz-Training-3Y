$(document).ready(function () {
    $(".course-card").each(function () {
        var titleEl = $(this).find(".course-title");
        var descEl = $(this).find(".course-desc");
        titleEl.data("original", titleEl.text());
        descEl.data("original", descEl.text());
    });

    function escapeRegex(text) {
        return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function escapeHtml(text) {
        return $("<div>").text(text).html();
    }

    function filterCourses() {
        var query = $.trim($("#courseSearch").val());
        var matched = 0;

        $(".course-card").each(function () {
            var card = $(this);
            var titleEl = card.find(".course-title");
            var descEl = card.find(".course-desc");
            var originalTitle = titleEl.data("original");
            var originalDesc = descEl.data("original");

            if (query === "") {
                titleEl.text(originalTitle);
                descEl.text(originalDesc);
                card.show();
                matched++;
                return;
            }

            var regex = new RegExp("(" + escapeRegex(query) + ")", "gi");
            var titleMatch = regex.test(originalTitle);
            regex.lastIndex = 0;
            var descMatch = regex.test(originalDesc);
            regex.lastIndex = 0;

            if (titleMatch || descMatch) {
                var highlightedTitle = escapeHtml(originalTitle).replace(regex, '<span class="matched-text">$1</span>');
                var highlightedDesc = escapeHtml(originalDesc).replace(regex, '<span class="matched-text">$1</span>');
                titleEl.html(highlightedTitle);
                descEl.html(highlightedDesc);
                card.find(".matched-text").css({
                    "background-color": "#fef08a",
                    "color": "#111827",
                    "padding": "0 3px",
                    "border-radius": "3px",
                    "font-weight": "700"
                });
                card.show();
                matched++;
            } else {
                titleEl.text(originalTitle);
                descEl.text(originalDesc);
                card.hide();
            }
        });

        $("#matchCount").text(matched);
    }

    $("#courseSearch").on("keyup", filterCourses);

    $("#clearSearchBtn").on("click", function () {
        $("#courseSearch").val("");
        filterCourses();
    });
});
