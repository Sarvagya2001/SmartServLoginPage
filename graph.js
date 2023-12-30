var y1 = ["Everett", "Seattle", "Lynnwood", "Bothell", "Mukilteo", "Edmonds"];
var x1 = [80000,71000,49000,47500,45000,34000];
var barColors = ["#29AB87", "#29AB87", "#29AB87", "#29AB87", "#29AB87","#29AB87"];

new Chart("myChart", {
    type: "horizontalBar", // Use horizontalBar type
    data: {
        labels: y1,  
        datasets: [{
            backgroundColor: barColors,
            data: x1
        }]
    },
    options: {
        legend: { display: false },
    }
});

var y2 = ["Service plumbing", "Big Work HVAC", "Serive HVAC", "Big Work Plumbing", "HWT Replacement", "Maintenance", "Materical Sale"];
var x2 = [182000,130000,79000,75000,45000,44000,22000];
var barColors2 = ["#29AB87", "#29AB87", "#29AB87", "#29AB87", "#29AB87","#29AB87","#29AB87"];

new Chart("myChart2", {
    type: "horizontalBar", // Use horizontalBar type
    data: {
        labels: y2,  
        datasets: [{
            backgroundColor: barColors2,
            data: x2
        }]
    },
    options: {
        legend: { display: false },
    }
});
