$(document).ready(function () {
    function showSuccessMessage(message) {
        var notice = $('<div class="status-msg"></div>').text(message);
        $("#statusArea").empty().append(notice);
        notice.hide().fadeIn(200);
    }

    function attachTopicHandlers(topicElement) {
        topicElement.find(".subscribe-btn").on("click", function () {
            var item = $(this).closest(".topic-item");
            var title = item.find("h3").text();
            item.find(".notif-badge")
                .removeClass("notif-off")
                .addClass("notif-on")
                .text("Notifications Enabled");
            showSuccessMessage("Subscribed to '" + title + "'. Notifications enabled.");
        });

        topicElement.find(".unsubscribe-btn").on("click", function () {
            var item = $(this).closest(".topic-item");
            var title = item.find("h3").text();
            item.find(".notif-badge")
                .removeClass("notif-on")
                .addClass("notif-off")
                .text("Notifications Disabled");
            showSuccessMessage("Unsubscribed from '" + title + "'. Notifications disabled.");
        });

        topicElement.find(".remove-btn").on("click", function () {
            var item = $(this).closest(".topic-item");
            var title = item.find("h3").text();
            item.find("button").off("click");
            item.fadeOut(250, function () {
                $(this).remove();
            });
            showSuccessMessage("Removed '" + title + "' and detached its event listeners.");
        });
    }

    $(".topic-item").each(function () {
        attachTopicHandlers($(this));
    });

    $("#addTopicForm").on("submit", function (event) {
        event.preventDefault();
        var topicName = $.trim($("#newTopicInput").val());
        if (topicName === "") {
            showSuccessMessage("Please enter a topic name before adding.");
            return;
        }

        var newTopic = $(
            '<article class="topic-item">' +
                '<div class="topic-info">' +
                    '<h3></h3>' +
                    '<span class="notif-badge notif-off">Notifications Disabled</span>' +
                '</div>' +
                '<div class="topic-actions">' +
                    '<button class="subscribe-btn" type="button">Subscribe</button>' +
                    '<button class="unsubscribe-btn" type="button">Unsubscribe</button>' +
                    '<button class="remove-btn" type="button">Remove</button>' +
                '</div>' +
            '</article>'
        );
        newTopic.find("h3").text(topicName);

        $("#topicList").append(newTopic);
        attachTopicHandlers(newTopic);
        $("#newTopicInput").val("");
        showSuccessMessage("Added new subscription topic: '" + topicName + "'.");
    });
});
