function log(string)
{
    $("#output").append($("<p></p>")
        .addClass("debug")
        .html(string));
}