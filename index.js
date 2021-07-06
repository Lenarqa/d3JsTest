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