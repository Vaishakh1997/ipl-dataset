const matchList=require('./matches.json');
const deliveriesList=require('./deliveries.json');


// 1. Number of matches played per runCounter for result the years in IPL.

// function noOfMatchesPlayedPerYear(matchList)
// {
//     const noOfMatches=matchList.reduce((iplYear,runCounter) =>{ 
//         if(iplYear.hasOwnProperty(runCounter.season) === true)
//             iplYear[runCounter.season]+=1;
//         else
//             iplYear[runCounter.season]=1; 
//         return iplYear;
//     } , {})
// return noOfMatches;
// }
// console.log(noOfMatchesPlayedPerYear(matchList));








// 2.Number of matches won of per allTeam per year in IPL.

// var object=matchList.reduce((iplTeam,runCounter) =>{ 
//     if(iplTeam.hasOwnProperty(runCounter.winner) === true)
//     {
//         if(iplTeam[runCounter.winner].hasOwnProperty(runCounter.season)===true)
//             iplTeam[runCounter.winner][runCounter.season]+=1;
//         else
//             iplTeam[runCounter.winner][runCounter.season]=1;
//     }
//     else
//         iplTeam[runCounter.winner]={};
//     return iplTeam;
// },{});
// delete object[''];
// console.log(object)






// 3. Extra runs conceded per allTeam in 2016

// var id2016=matchList.filter(id=> id.season == 2016).map(a=>a.id);
// var max= getMaxOfArray(id2016)
// function getMaxOfArray(id2016) {
//     return Math.max.apply(null, id2016);
//   }

// var min= getMinOfArray(id2016)
// function getMinOfArray(id2016) {
//     return Math.min.apply(null, id2016);
//   }

// function extraRunsConceeded(deliveriesList,max,min)
// {
//     const match2016=deliveriesList.filter(id => id.match_id>=min && id.match_id<=max)
//     var extraRunPerTeam= match2016.reduce((iplTeam,runCounter) =>{ 
//     if(iplTeam.hasOwnProperty(runCounter.bowling_team) === true)
//     iplTeam[runCounter.bowling_team]+=Number(runCounter.extra_runs);
//     else
//     iplTeam[runCounter.bowling_team]=1; 
//     return iplTeam;
//     } , {});
//     return extraRunPerTeam;
// }
// console.log(extraRunsConceeded(deliveriesList,max,min));









//4. Top 10 economical bowlers in 2015

// var id2015=matchList.filter(id=> id.season == 2015).map(a=>a.id);
// var max= getMaxOfArray(id2015)
// function getMaxOfArray(id2015) {
//     return Math.max.apply(null, id2015);
//   }

// var min= getMinOfArray(id2015)
// function getMinOfArray(id2015) {
//     return Math.min.apply(null, id2015);
//   }


//     const matchPlayedIn2015=deliveriesList.filter(id => id.match_id>=min && id.match_id<=max)
//     var bowlerObject=matchPlayedIn2015.reduce((iplBowler,runCounter) =>{ 
//         if(iplBowler.hasOwnProperty(runCounter.bowler) === true)
//         {
//             iplBowler[runCounter.bowler]['ball']+=1;
//             iplBowler[runCounter.bowler]['runs']+=(Number(runCounter.wide_runs) + Number(runCounter.batsman_runs) + Number(runCounter.noball_runs));
//             if(runCounter.wide_runs != 0 && runCounter.noball_runs != 0)
//             iplBowler[runCounter.bowler]['ball']-=1;
//         }
//         else
//         {
//             iplBowler[runCounter.bowler]=[]
//             iplBowler[runCounter.bowler]['ball']=1;
//             iplBowler[runCounter.bowler]['runs']=(Number(runCounter.wide_runs) + Number(runCounter.batsman_runs) + Number(runCounter.noball_runs));

//         }
//     return iplBowler;
//     },[]);
   
// let arrayOfBowler=Object.entries(bowlerObject).reduce((objectOfEconomy,economyCounter)=>
//     {
//     if(economyCounter[1]['ball']>24)
//     {
//         let economy=economyCounter[1]['runs']/(economyCounter[1]['ball']/6);
//         objectOfEconomy[economyCounter[0]]=economy;
//     }
//     return objectOfEconomy;
//     },[]);
    
// arrayOfBowler=Object.entries(arrayOfBowler).sort(Comparator).slice(0,10);
// function Comparator(a, b) 
// {
//     if (a[1] < b[1]) return -1;
//     else return 1;
// }
// console.log(arrayOfBowler);



