$(document).ready(function() {

    $.get("header.html", function(data) {
        $("#header-placeholder").replaceWith(data);
    });
});
