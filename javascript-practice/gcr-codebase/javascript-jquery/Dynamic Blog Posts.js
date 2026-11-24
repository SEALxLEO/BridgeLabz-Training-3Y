$(document).ready(function () {
    var postCounter = 6;
    var featuredCounter = 1;

    function buildPost(title, content, isFeatured) {
        var post = $('<article class="blog-post"></article>');
        if (isFeatured) {
            post.addClass("featured");
        }
        var heading = $('<h3 class="post-title"></h3>').text(title);
        var body = $('<p class="post-body"></p>').text(content);
        post.append(heading, body);
        return post;
    }

    $("#addPostBtn").on("click", function () {
        var title = $.trim($("#postTitleInput").val()) || ("New Blog Post #" + postCounter++);
        var content = $.trim($("#postContentInput").val()) || "Published dynamically using jQuery append() for rapid content updates.";
        $("#blogList").append(buildPost(title, content, false));
        $("#postTitleInput").val("");
        $("#postContentInput").val("");
    });

    $("#prependFeaturedBtn").on("click", function () {
        var title = $.trim($("#postTitleInput").val()) || ("Featured Story #" + featuredCounter++);
        var content = $.trim($("#postContentInput").val()) || "Highlighted featured article added to the top using jQuery prepend().";
        $("#blogList").prepend(buildPost(title, content, true));
        $("#postTitleInput").val("");
        $("#postContentInput").val("");
    });

    $("#removeLastBtn").on("click", function () {
        $("#blogList .blog-post").last().remove();
    });

    $("#addTagBtn").on("click", function () {
        var tagText = $.trim($("#tagInput").val()) || "WebDev";
        $(".blog-post").each(function () {
            var titleEl = $(this).find(".post-title");
            var bodyEl = $(this).find(".post-body");
            titleEl.before($('<span class="tag-badge tag-before"></span>').text("#" + tagText));
            bodyEl.after($('<span class="tag-badge tag-after"></span>').text("Tag: " + tagText));
        });
        $("#tagInput").val("");
    });

    function highlightByKeyword() {
        var keyword = $.trim($("#keywordInput").val()).toLowerCase();
        $(".blog-post").removeClass("keyword-match");
        if (keyword === "") {
            return;
        }
        $(".blog-post").each(function () {
            if ($(this).text().toLowerCase().indexOf(keyword) !== -1) {
                $(this).addClass("keyword-match");
            }
        });
    }

    $("#highlightKeywordBtn").on("click", highlightByKeyword);
    $("#keywordInput").on("keyup", highlightByKeyword);
});
