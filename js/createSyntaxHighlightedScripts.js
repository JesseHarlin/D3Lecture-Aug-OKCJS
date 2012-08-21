$(document).ready(function() {


    updateCodeVisuals();
});

var shObj = { };

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


$(document).ready(function() {
    var $menuIcon = $('<div style="float: right"><a id="menu_icon"><img src="css/images/list_bullets.png" /></a></div>');


    $('h1:first').parent().append($menuIcon);

    $menuIcon.click(function() {

        if ($('#menu_list').length) {

            $('#menu_list').remove();

        } else {

            var $menu = $(generateMenuHtml());


            $(this).parent().append($menu);
        }

    });

});


function generateMenuHtml() {
    var slidesLength = slides.length;

    var menuHtml = '<div id="menu_list"><ul>';

    for (var i = 0; i < slidesLength; i++) {

        menuHtml += '<li><a href="' + slides[i].url + '">' + slides[i].name + '</a></li>';

    }


    menuHtml += "</ul><div>";

    return menuHtml;
}

var slides = [
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    },
    {
        name: "Main",
        url: "00_0_What_is_d3.htm",
        id: 0
    }    
];