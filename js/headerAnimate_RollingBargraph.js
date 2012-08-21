
// This makes an animated progress bar

var o = { };

var t = 1297110663, // start time (seconds since epoch)
    v = 70, // start value (subscribers)
    data = d3.range(33).map(next);

// starting dataset

function next() {
    return {
        time: ++t,
        value: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - 0.5)))
    };
}

setInterval(function() {
    data.shift();
    data.push(next());
    update();
}, 1000);


$(document).ready(function() {
    init();
});

function init() {
    o.$container = $("#art-banner");
    o.D3conatiner = d3.select("#art-banner").append("svg:svg");

    //canvas
    o.w = o.$container.width();
    o.h = o.$container.height();

    o.barWidth = Math.floor(o.w / data.length);
    o.D3conatiner
        .attr("class", "animated-banner-back-1")
        .attr("width", o.w)
        .attr("height", o.h);
    //scales
    o.x = d3.scale.linear()
        .domain([0, 1])
        .range([0, o.barWidth]);

    o.y = d3.scale.linear()
        .domain([0, 100])
        .rangeRound([0, o.h]);

    //chart
    o.D3conatiner.selectAll("rect").data(data).enter().append("rect")
        .attr("x", function(d, i) {
            return o.x(i) - 1.5;
        })
        .attr("y", function(d, i) {
            return o.h - o.y(d.value) - 1.5;
        })
        .attr("width", o.barWidth)
        .attr("height", function(d, i) {
            return o.y(d.value);
        })
        .attr("stroke", "#ccc")
        .attr("fill", "#004856");
}

function update() {
    var rect = o.D3conatiner.selectAll("rect").data(data, function(d, i) {
        return d.time;
    });

    rect.enter().insert("rect")
        .attr("x", function(d, i) {
            return o.x(i) - 1.5;

        })
        .attr("y", function(d, i) {

            return o.h - o.y(d.value) - 1.5;
        })
        .attr("width", o.barWidth)
        .attr("height", function(d, i) {

            return o.y(d.value);
        })
        .attr("stroke", "#ccc")
        .attr("fill", "#004856")
        
        ;

    rect.transition()
        .duration(1000)
        .ease("linear")
        .attr("x", function(d, i) {
            return o.x(i) - 1.5;
        });

    rect.exit().remove();
}

