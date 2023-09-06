document.addEventListener("DOMContentLoaded", function () {
    // Get the token from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    console.log("Token from URL:", token);

    // Get the token from localStorage
    const getToken = sessionStorage.getItem('token');

    if (token || getToken) {
        const apiUrl = "https://embraceher.onrender.com";
        const endpoint = "/api/v1/statistics";
        const url = apiUrl + endpoint;

        fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token || getToken}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return response.json();
        })
        .then(stats => {
            console.log("Stats Data:", stats);
            const users = document.getElementById('users');
            const courses = document.getElementById('courses');
            const healthtips = document.getElementById('healthtips');
            const recommendation = document.getElementById('recommendation');
            const weightloss = document.getElementById('weightloss');

            users.innerHTML = stats.users;
            courses.innerHTML = stats.course;
            healthtips.innerHTML = stats.healthtips;
            recommendation.innerHTML = stats.recommendation;
            weightloss.innerHTML = stats.weightloss;

            // Data for the bar chart
            const data = [
                { category: "USERS", value: stats.users },
                { category: "COURSES", value: stats.course },
                { category: "HEALTHTIPS", value: stats.healthtips },
                { category: "RECOMMENDATION", value: stats.recommendation },
                { category: "WEIGHTLOSS", value: stats.weightloss }
            ];

            // Set the dimensions and margins of the chart
            const margin = { top: 20, right: 20, bottom: 30, left: 50 };
            const width = 600 - margin.left - margin.right;
            const height = 330 - margin.top - margin.bottom;

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

        })
        .catch(error => {
            console.error("Error:", error);
        });
    } else {
        // If no token is present, route back to the login page
        window.location.href = '/index.html';
    }
});