//select dom element
d3.select();
d3.selectAll();

d3.select("h1").style("color", "red").attr("class", "upperH1").text("Hello D3");

d3.select('body').append('h2').text('Hello h2 from d3 one');
d3.select('body').append('h2').text('Hello h2 from d3 two');
d3.select('body').append('h2').text('Hello h2 from d3 three');

d3.selectAll('h2').attr('class', 'upperH2');