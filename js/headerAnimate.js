
// This makes an animated progress bar

var o = { };

var t = 1297110663, // start time (seconds since epoch)
    v = 70, // start value (subscribers)
    data = d3.range(33).map(generateJSONPiece);

var animationSpeed = 1000;

// starting dataset

function generateJSONPiece() {
    return {
        time: ++t,
        value: v = ~ ~Math.max(10, Math.min(90, v + 10 * (Math.random() - 0.5))),
        x: Math.random()

    };
}

setInterval(function() {
    data.shift();
    data.push(generateJSONPiece());
    //update();
}, animationSpeed);


$(document).ready(function () {
    initViewPort();

    initVisual();
});

function initViewPort() {
    o.$container = $("#art-banner");
    o.D3conatiner = d3.select("#art-banner").append("svg:svg");

    //canvas
    o.w = o.$container.width();
    o.h = o.$container.height();

    o.radius = Math.min(o.w, o.h) / 2;


    o.barWidth = Math.floor(o.w / data.length);
    o.D3conatiner
        .attr("class", "animated-banner-back-1")
        .attr("width", o.w)
        .attr("height", o.h);
    //scales
    o.x = d3.scale.linear()
        .domain([0, 1])
        .range([0, o.w]);

    o.y = d3.scale.linear()
        .domain([0, 100])
        .rangeRound([0, o.h]);
}

function initVisual() {





}

function update() {

}

