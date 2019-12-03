// Create the chart

matchesPerSeason()
extraRunsConceeded()
top10EconomicalBowlers()
matchesWonPerYear()

function matchesPerSeason()
{
    fetch('../output/matchesPerSeason.json')
    .then(response => response.json())
    .then(data => 
    
    Highcharts.chart('matchesPerSeason', {
    
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
            colorByPoint: false,
            data :Object.entries(data)
        }
    ]  
})
);
}






// Create the chart
function extraRunsConceeded()
{
    fetch('../output/extraRunsConceeded.json')
    .then(response => response.json())
    .then(data => 
    Highcharts.chart('extraRunsConceeded', {
    
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
function top10EconomicalBowlers()
{
    fetch('../output/top10EconomicalBowlers.json')
    .then(response => response.json())
    .then(data => 
    Highcharts.chart('top10EconomicalBowlers', {
    
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
            
            data : data ,
        }
    ]  
})
);
}







function matchesWonPerYear()
{
    fetch('../output/MatchesWonPerYear.json')
    .then(response => response.json())
    .then(data => 
{
    data=Object.entries(data)
    const years= data.map(year=>Object.keys(year[1]))
   
    data=data.map((team) =>(
        {
            name:team[0],
            data:Object.values(team[1]),
            
        }));
        Highcharts.chart('matchesWonPerYear', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Number of Matches Won per Team per Year'
            },
            xAxis: {
                categories: years[0],
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