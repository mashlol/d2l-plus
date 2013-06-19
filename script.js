// TODO remove this
$("head").append('<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>');

var buttons = $("#ContentView").next().children().first().children();
var downloadBtn = buttons.first();

var pdf = downloadBtn.attr("href");
if (pdf) window.open(pdf, "_self");

$(".d2l-collapsepane-content .d2l-datalist-simpleitem a.d2l-link.d2l-outline.d2l-link-main").attr("target", "_blank");