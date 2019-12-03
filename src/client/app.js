// Create the chart
function match1()
{
    fetch('../output/matchesPerSeason.json')
    .then(response => response.json())
    .then(data => 
    
    Highcharts.chart('container1', {
    
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number of matches played per Year'
    },
    subtitle: {
        //text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category',
        title: {
            text: 'Year'
        }
    },
    yAxis: {
        title: {
            text: 'Total Matches Played'
        }

    },
    legend: {
        enabled: false
    },
 

    tooltip: {
        headerFormat: '<span style="font-size:11px"></span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name} : </span> <b>{point.y}</b> Matches Played<br/>'
    },

    series: [
        {
            colorByPoint: true,
            data :Object.entries(data)
        }
    ]  
})
);
}






// Create the chart
function match2()
{
    fetch('../output/extraRunsConceeded.json')
    .then(response => response.json())
    .then(data => 
    Highcharts.chart('container2', {
    
    chart: {
        type: 'column'
    },
    title: {
        text: 'Extra Runs Conceeded per Team'
    },
    subtitle: {
        //text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category',
        title: {
            text: 'Team Name'
        }
    },
    yAxis: {
        title: {
            text: 'Extra Runs'
        }

    },
    legend: {
        enabled: false
    },
 

    tooltip: {
        headerFormat: '<span style="font-size:11px"></span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span> :  <b>{point.y}</b> Extra Runs Conceeded   <br/>'
    },

    series: [
        {
            colorByPoint: false,
            data : Object.entries(data),
        }
    ]  
})
);
}






// Create the chart
function match3()
{
    fetch('../output/top10EconomicalBowlers.json')
    .then(response => response.json())
    .then(data => 
    Highcharts.chart('container3', {
    
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Top 10 Economical Bowlers in 2015'
    },
    subtitle: {
        //text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category',
        title: {
            text: 'Top 10 Economical Bowlers'
        }
    },
    yAxis: {
        title: {
            text: 'Economy Rate'
        }

    },
    legend: {
        enabled: false
    },
 

    tooltip: {
        headerFormat: '<span style="font-size:11px"></span><br>',
        pointFormat: '<span style="color:{point.color}"></span> Bowling Economy: <b>{point.y:.2f}</b> <br/>'
    },

    series: [
        {
            colorByPoint: true,
            data : data ,
        }
    ]  
})
);
}







function match4()
{
    fetch('../output/MatchesWonPerYear.json')
    .then(response => response.json())
    .then(data => 
{
    data=Object.entries(data)
    const year= data.map(ele=>Object.keys(ele[1]))
   
    data=data.map((d) =>(
        {
            name:d[0],
            data:Object.values(d[1]),
        }));
        Highcharts.chart('container4', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Number of Matches Won per Team per Year'
            },
            xAxis: {
                categories: year[0],
                title: {
                    text: 'Year'
                }
                
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Matches Won'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: data,
        })
        
        }
    )
}