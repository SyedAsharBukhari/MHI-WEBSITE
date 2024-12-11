const ctx = document.getElementById('studyOutcomeChart').getContext('2d');

const studyOutcomeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            '1878', '1978', '1998', '2000', '2001', '2002', '2003',
            '2004', '2005', '2006', '2007',
            '1878', '1878', '1878', '1878', '1878', '1878',
            '1878', '1878', '1878', '1878', '1878', '1878'
        ],
        datasets: [{
            label: 'Study Outcomes',
            data: [
                420, 700, 300, 420, 270, 840, 420,
                310, 35, 95, 195,
                70, 400, 495, 430, 700, 40,
                100, 200, 60, 420, 830, 420
            ],
            backgroundColor: '#3e95cd'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 1000, // Set the maximum value to 1000
                ticks: {
                    stepSize: 100 // Set the gap to 100
                },
                grid: {
                    display: true // Keep horizontal grid lines
                }
            },
            x: {
                grid: {
                    display: false // Disable vertical grid lines
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,

            }
        }
    }
});
