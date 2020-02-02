// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

data.forEach(function(record){
    var row = tbody.append("tr");
    Object.entries(record).forEach(function([key,value]){
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click",function(){
    var tbody = d3.select("tbody");
    var inputElement = d3.select(".form-control");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(record => record.datetime === inputValue);

    tbody.html(``);

    filteredData.forEach(record=>{
        var row=tbody.append("tr");
        row.append('td').text(record.datetime);
        row.append('td').text(record.city);
        row.append('td').text(record.state);
        row.append('td').text(record.country);
        row.append('td').text(record.shape);
        row.append('td').text(record.durationMinutes);
        row.append('td').text(record.comments);
    });
})