// 1. Number of matches played per match for result the years in IPL.

function noOfMatchesPlayedPerYear(matches)
{
    const noOfMatches=matches.reduce((noOfMatches,match) =>{ 
        if(noOfMatches.hasOwnProperty(match.season) === true)
            noOfMatches[match.season]+=1;
        else
            noOfMatches[match.season]=1; 
        return noOfMatches;
    } , {})
    return noOfMatches;
}




// 2.Number of matches won of per allTeam per year in IPL.

function noOfMatchesWonPerYear(matchList)
{ 
    var matchWonPerYear=matchList.reduce((matches,match) =>{ 
        if(matches.hasOwnProperty(match.winner))
        {
            if(matches[match.winner].hasOwnProperty(match.season))
                matches[match.winner][match.season]+=1;
            else 
                matches[match.winner][match.season]=1;
        }
        else 
            matches[match.winner]={};    
        return matches;
    },{});
    delete matchWonPerYear[''];
    return matchWonPerYear;  
}





// //3. Extra runs conceded per allTeam in 2016
function extraRunsConceeded(matchList,deliveriesList)
{
    var id2016=matchList.filter(id=> id.season == 2016).map(match=>match.id);
    var max= Math.max.apply(null, id2016);
    var min= Math.min.apply(null, id2016);
    return extraRuns(deliveriesList,max,min);
} 
    function extraRuns(deliveriesList,max,min)
    {
        const match2016=deliveriesList.filter(delivery => delivery.match_id>=min && delivery.match_id<=max)
        var extraRunPerTeam= match2016.reduce((noOfMatches,match) =>{ 
            if(noOfMatches.hasOwnProperty(match.bowling_team))
                noOfMatches[match.bowling_team]+=Number(match.extra_runs);
            else
                noOfMatches[match.bowling_team]=Number(match.extra_runs);
        return noOfMatches;
        } , {});
        return extraRunPerTeam;
    }





// //4. Top 10 economical bowlers in 2015

function top10EconomicalBowlers(matchList,deliveriesList)
{
    var id2015=matchList.filter(match=> match.season == 2015).map(match=>match.id);
    var max= Math.max.apply(null, id2015);
    var min= Math.min.apply(null, id2015);
    return economicalBowlers(deliveriesList,max,min)
}

function economicalBowlers(deliveriesList,max,min)
{
    const matchPlayedIn2015=deliveriesList.filter(delivery => delivery.match_id>=min && delivery.match_id<=max)
    var bowlers=matchPlayedIn2015.reduce((matches2015,match) =>{ 
        if(matches2015.hasOwnProperty(match.bowler) === true)
        {
            if(match.wide_runs == 0 && match.noball_runs == 0)
                matches2015[match.bowler]['ball']+=1;
            matches2015[match.bowler]['runs']+=(Number(match.wide_runs) + Number(match.batsman_runs) + Number(match.noball_runs));
        }
        else
        {
            matches2015[match.bowler]={}
            matches2015[match.bowler]['ball']=1;
            matches2015[match.bowler]['runs']=(Number(match.wide_runs) + Number(match.batsman_runs) + Number(match.noball_runs));

        }
    return matches2015;
    },{});
   
 // calculating the economy   
let player=Object.entries(bowlers).reduce((noOfBowlers,bowler)=>
    {
    if(bowler[1]['ball']>=24)
    {
        let economy=bowler[1]['runs']/(bowler[1]['ball']/6);
        noOfBowlers[bowler[0]]=economy;
    }
    return noOfBowlers;
    },{});
    
// sorting top 10
player=Object.entries(player).
sort(Comparator).slice(0,10);
function Comparator(a, b) 
{
    if (a[1] < b[1]) return -1;
    else return 1;
}
    return player;
}
    

module.exports = { noOfMatchesPlayedPerYear, noOfMatchesWonPerYear, extraRunsConceeded, top10EconomicalBowlers }
