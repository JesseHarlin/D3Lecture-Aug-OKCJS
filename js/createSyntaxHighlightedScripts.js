$(document).ready(function () {


    updateCodeVisuals();
});

var shObj = {};

function updateCodeVisuals() {


    shObj.$codespace = shObj.$codespace || $('#codespace');
    shObj.$js = shObj.$js || shObj.$codespace.find('div.brush_js');
    shObj.jsHtml = shObj.$js.find('script').html();
    shObj.$scriptcontainer = shObj.$scriptcontainer || shObj.$js.find('.script_container');

    shObj.$scriptcontainer.html($('<pre class="brush:js">' + shObj.jsHtml + "</pre>"));


    shObj.$css = shObj.$css || shObj.$codespace.find('div.brush_css');
    shObj.cssHtml = shObj.$css.find('style').html();
    shObj.$stylecontainer = shObj.$stylecontainer || shObj.$css.find('.style_container');

    shObj.$stylecontainer.html($('<pre class="brush:css">' + shObj.cssHtml + "</pre>"));


    SyntaxHighlighter.all();
}


