// D3 TEST 1 JS

// Variable definition
var datasource = "data/data.csv"

var width = 720,
    barHeight = 30;

// Initialization

//scale, only width
var x = d3.scale.linear()
    .range([0, width]);

//graph size, only width
var chart = d3.select(".chart")
    .attr("width", width);

d3.csv(datasource, type, function(error, data) {
	//scale heigth
	x.domain([0, d3.max(data, function(d) { return d.value; })]);

	// graph-data link elements
	var bar = chart.selectAll("g")
	    .data(data)
	  .enter().append("g")
	    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

	//chart height size
	chart.attr("height", barHeight * data.length);

	// bars
	bar.append("rect")
	    .attr("width", function(d) { return x(d.value); })
	    .attr("height", barHeight - 1);

	// text labels
	bar.append("text")
	    .attr("x", function(d) { return x(d.value) - 5; })
	    .attr("y", barHeight / 2)
	    .attr("dy", ".35em")
	    .text(function(d) { return d.value; });

});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}    