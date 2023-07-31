// Data for the bar chart
const data = [
    { category: "A", value: 20 },
    { category: "B", value: 50 },
    { category: "C", value: 30 },
    { category: "D", value: 40 },
    { category: "E", value: 25 }
];

// Set the dimensions and margins of the chart
const margin = { top: 20, right: 20, bottom: 30, left: 50 };
const width = 600 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Create the SVG element
const svg = d3.select("#chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Create the x-axis scale
const x = d3.scaleBand()
    .range([0, width])
    .padding(0.1)
    .domain(data.map(d => d.category));

// Create the y-axis scale
const y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(data, d => d.value)]);

// Create the x-axis
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

// Create the y-axis
svg.append("g")
    .call(d3.axisLeft(y));

// Create the bars
svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.category))
    .attr("y", d => y(d.value))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.value));
