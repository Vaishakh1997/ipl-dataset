
const list1=require('./matches.json');
const list2=require('./deliveries.json');


// 1. Number of matches played per year for all the years in IPL.

var object1={};
var count=0;
list1.forEach(function(element)
{
    list1.forEach(function(team)
    {
        if(element.season==team.season)
        {
            count++;
        }
    });
    object1[element.season]=count;
    count=0;
});
console.log(object1);








// 2.Number of matches won of per allTeam per year in IPL.

var result={};
function noOfMatchesWonPerAllTeamPerYear(list1,result)
{
    let noOfMatchesWon=0;
    list1.forEach(function(teamName){
        result[teamName.winner]= {};
        list1.forEach(function(oneTeam){
            list1.forEach(function(allTeam){
                if(allTeam.winner===teamName.winner && allTeam.season===oneTeam.season )
                {
                    noOfMatchesWon++;
                }
            }); 
        //if(noOfMatchesWon>0)
        result[teamName.winner][oneTeam.season]=noOfMatchesWon;
        noOfMatchesWon=0;
    });
});
delete result[''];
}









// 3. Extra runs conceded per allTeam in 2016

var object4={};
var count=0;
const match2016=list2.filter(id => id.match_id>=577 && id.match_id<=636)
match2016.forEach(function(element){
    match2016.forEach(function(team)
        {
            if(team.bowling_team===element.bowling_team)
            {
                
               count=Number(team.extra_runs)+count;
               
            }
        });  
    object4[element.bowling_team]=count;
    count=0;
});
console.log(object4);










//4. Top 10 economical bowlers in 2015
let ball=0;
let total_runs=0;
const object5={};
const match2015=list2.filter(id => id.match_id>=518 && id.match_id<=576)
   match2015.forEach(function(bowlers){
        match2015.forEach(function(team){
            if(bowlers.bowler===team.bowler)
            {
                ball++;
                total_runs+=Number(team.wide_runs) + Number(team.batsman_runs) + Number(team.noball_runs);
                if(team.wide_runs !=0 || team.noball_runs!=0)
                {
                    ball--;
                }
            }
        });
     
        if(ball>=24)
        {
            let over=ball/6;
            let economy=total_runs/over;
            object5[bowlers.bowler]=economy;
        }
        ball=0;
        total_runs=0;
});
let array=Object.entries(object5)
array = array.sort(Comparator);

function Comparator(a, b) {
    if (a[1] < b[1]) return -1;
    else return 1;
  }
 
array=array.slice(0,10);
console.log(array)


