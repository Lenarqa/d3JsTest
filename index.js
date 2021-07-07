//lesson 1
//select dom element
// d3.select();
// d3.selectAll();

// d3.select("h1").style("color", "red").attr("class", "upperH1").text("Hello D3");

// d3.select('body').append('h2').text('Hello h2 from d3 one');
// d3.select('body').append('h2').text('Hello h2 from d3 two');
// d3.select('body').append('h2').text('Hello h2 from d3 three');

// d3.selectAll('h2').attr('class', 'upperH2');

//lesson 2
var dataset = ['cat', 'cow', 'mouse', 'dog', 'horse'];

// d3.select('body').selectAll('h2').data(dataset).enter().append('p').text('D3 is awesome');//create 5 p with const text
d3.select('body').selectAll('h2').data(dataset).enter().append('p').text((text)=>{return text});//show data from dataset

//lesson 3 bar chart
var dataset2 = [80, 100, 56, 120, 180, 30, 40, 120, 160];



var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = svgWidth/dataset2.length;

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

var barChart = svg.selectAll('rect')
    .data(dataset2)
    .enter()
    .append('rect')
    .attr('y', function(d){
        return svgHeight - d;
    })
    .attr('height', function(d){
        return d;
    })
    .attr('width', barWidth-barPadding)
    .attr('transform', function(d, i){
        var translate = [barWidth * i, 0];
        return "translate("+ translate + ")";
    });

//create labels in barchart
var text = svg.selectAll('text')
    .data(dataset2)
    .enter()
    .append('text')
    .text(function (el) {
        return el;
    })
    .attr('y', function (el, i) {
        return svgHeight - el-2;
    })
    .attr('x', function (el, i) {
        return barWidth * i;
    })

// create scales
var dataset2 = [1, 2, 3, 4, 5];
var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset2)])
    .range([0, svgHeight]);


var svg2 = d3.select('.svg2')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

var barChart = svg2.selectAll('rect')
    .data(dataset2)
    .enter()
    .append('rect')
    .attr('y', function(d){
        return svgHeight - yScale(d);
    })
    .attr('height', function(d){
        return yScale(d);
    })
    .attr('width', barWidth-barPadding)
    .attr('transform', function(d, i){
        var translate = [barWidth * i, 0];
        return "translate("+ translate + ")";
    });

//create labels in barchart
var text = svg2.selectAll('text')
    .data(dataset2)
    .enter()
    .append('text')
    .text(function (el) {
        return el;
    })
    .attr('y', function (el, i) {
        return svgHeight - yScale(el)-2;
    })
    .attr('x', function (el, i) {
        return barWidth * i;
    })

var svg3 = d3.select('.svg3')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

    svg3.append("circle") 
        .attr("cx", 100)
        .attr("cy", 100)
        .attr("r", 50)
        .style('fill', 'yellow')
        .style("stroke", "blue")
        .style("stroke-width", "4");
    
    svg3.append("rect")
        .style("fill", "none")
        .style("stroke", "red")
        .style("stroke-width", "2")
        .attr("x", 45)
        .attr("y", 45)
        .attr("width", 110) 
        .attr("height", 110)
        .attr("rx", 5);