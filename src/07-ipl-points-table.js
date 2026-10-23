/**
 * 🏆 IPL Season Points Table
 *
 * IPL ka season chal raha hai aur tujhe points table banana hai!
 * Tujhe match results ka array milega, aur tujhe har team ke points
 * calculate karke sorted table return karna hai.
 *
 * Match result types:
 *   - "win": Winning team gets 2 points, losing team gets 0
 *   - "tie": Both teams get 1 point each
 *   - "no_result": Both teams get 1 point each (rain/bad light)
 *
 * Each match object: { team1: "CSK", team2: "MI", result: "win", winner: "CSK" }
 *   - For "tie" and "no_result", the winner field is absent or ignored
 *
 * Rules (use for loop with object accumulator):
 *   - Loop through matches array
 *   - Build an object accumulator: { "CSK": { team, played, won, lost, tied, noResult, points }, ... }
 *   - After processing all matches, convert to array and sort:
 *     1. By points DESCENDING
 *     2. If points are equal, by team name ASCENDING (alphabetical)
 *
 * Validation:
 *   - Agar matches array nahi hai ya empty hai, return []
 *
 * @param {Array<{team1: string, team2: string, result: string, winner?: string}>} matches
 * @returns {Array<{team: string, played: number, won: number, lost: number, tied: number, noResult: number, points: number}>}
 *
 * @example
 *   iplPointsTable([
 *     { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
 *     { team1: "RCB", team2: "CSK", result: "tie" },
 *   ])
 *   // CSK: played=2, won=1, tied=1, points=3
 *   // MI: played=1, won=0, lost=1, points=0
 *   // RCB: played=1, tied=1, points=1
 *   // Sorted: CSK(3), RCB(1), MI(0)
 */
export function iplPointsTable(matches) {
  // Your code here
  let currentObj = {};
  let initialObject = 
  {
    
  


  }


  if(!Array.isArray(matches) || matches.length===0) return [];
 
  for(let i=0;i<matches.length;i++){
    currentObj = {...matches[i]};
    // console.log(currentObj);
    if(initialObject[currentObj.team1]===undefined || initialObject[currentObj.team1]!==undefined){
      if(initialObject[currentObj.team1]===undefined){
        initialObject[currentObj.team1] = {};
        if(currentObj.result.toLowerCase()==="win".toLowerCase() && currentObj.winner.toLowerCase()===currentObj.team1.toLowerCase() ){
        initialObject[currentObj.team1].team = currentObj.team1;
        initialObject[currentObj.team1].played = 1;
        initialObject[currentObj.team1].won = 1;
        initialObject[currentObj.team1].lost = 0;
        initialObject[currentObj.team1].tied = 0;
        initialObject[currentObj.team1].noResult = 0;
        initialObject[currentObj.team1].points = 2;

      }else if (currentObj.result.toLowerCase()==="win".toLowerCase() && currentObj.winner.toLowerCase()!==currentObj.team1.toLowerCase()){
        initialObject[currentObj.team1].team = currentObj.team1;
        initialObject[currentObj.team1].played = 1;
        initialObject[currentObj.team1].won = 0;
        initialObject[currentObj.team1].lost = 1;
        initialObject[currentObj.team1].tied = 0;
        initialObject[currentObj.team1].noResult = 0;
        initialObject[currentObj.team1].points = 0;  

      } else if(currentObj.result.toLowerCase()==="tie".toLowerCase()){
        initialObject[currentObj.team1].team = currentObj.team1;
        initialObject[currentObj.team1].played = 1;
        initialObject[currentObj.team1].won = 0;
        initialObject[currentObj.team1].lost = 0;
        initialObject[currentObj.team1].tied = 1;
        initialObject[currentObj.team1].noResult = 0;
        initialObject[currentObj.team1].points = 1;
      } else{
        initialObject[currentObj.team1].team = currentObj.team1;
        initialObject[currentObj.team1].played = 1;
        initialObject[currentObj.team1].won = 0;
        initialObject[currentObj.team1].lost = 0;
        initialObject[currentObj.team1].tied = 0;
        initialObject[currentObj.team1].noResult = 1;
        initialObject[currentObj.team1].points = 1;
      }

      
    }else{
      
      if(currentObj.result.toLowerCase()==="win".toLowerCase() && currentObj.winner.toLowerCase()===currentObj.team1.toLowerCase() ){
        initialObject[currentObj.team1].played = initialObject[currentObj.team1].played + 1;
        initialObject[currentObj.team1].won = initialObject[currentObj.team1].won + 1;
        initialObject[currentObj.team1].points = initialObject[currentObj.team1].points + 2;
      }else if (currentObj.result.toLowerCase()==="win".toLowerCase() && currentObj.winner.toLowerCase()!==currentObj.team1.toLowerCase()){
        initialObject[currentObj.team1].played = initialObject[currentObj.team1].played + 1;
        initialObject[currentObj.team1].lost = initialObject[currentObj.team1].lost + 1;
      
        // initialObject[currentObj.team1].points = 0;  
      }

      else if(currentObj.result.toLowerCase()==="tie".toLowerCase()){
        initialObject[currentObj.team1].played = initialObject[currentObj.team1].played + 1;
        initialObject[currentObj.team1].tied = initialObject[currentObj.team1].tied + 1;
        initialObject[currentObj.team1].points = initialObject[currentObj.team1].points + 1;
      }

      else{
        initialObject[currentObj.team1].played = initialObject[currentObj.team1].played + 1;
        initialObject[currentObj.team1].noResult =  initialObject[currentObj.team1].noResult + 1;
        initialObject[currentObj.team1].points = initialObject[currentObj.team1].points + 1;
      }
    }
  }
  
  if(initialObject[currentObj.team2]===undefined || initialObject[currentObj.team2]!==undefined){
    if(initialObject[currentObj.team2]===undefined){
        initialObject[currentObj.team2] = {};
        if(currentObj.result.toLowerCase()==="win".toLowerCase() && currentObj.winner.toLowerCase()===currentObj.team2.toLowerCase()){
          initialObject[currentObj.team2].team = currentObj.team2;
          initialObject[currentObj.team2].played = 1;
          initialObject[currentObj.team2].won = 1;
          initialObject[currentObj.team2].lost = 0;
          initialObject[currentObj.team2].tied = 0;
          initialObject[currentObj.team2].noResult = 0;
          initialObject[currentObj.team2].points = 2;
        }
        else if (currentObj.result.toLowerCase()==="win".toLowerCase() && currentObj.winner.toLowerCase()!==currentObj.team2.toLowerCase()){
          initialObject[currentObj.team2].team = currentObj.team2;
          initialObject[currentObj.team2].played = 1;
          initialObject[currentObj.team2].won = 0;
          initialObject[currentObj.team2].lost = 1;
          initialObject[currentObj.team2].tied = 0;
          initialObject[currentObj.team2].noResult = 0;
          initialObject[currentObj.team2].points = 0;  
    
        }else if(currentObj.result.toLowerCase()==="tie".toLowerCase()){
          initialObject[currentObj.team2].team = currentObj.team2;
          initialObject[currentObj.team2].played = 1;
          initialObject[currentObj.team2].won = 0;
          initialObject[currentObj.team2].lost = 0;
          initialObject[currentObj.team2].tied = 1;
          initialObject[currentObj.team2].noResult = 0;
          initialObject[currentObj.team2].points = 1;
        } else{
          initialObject[currentObj.team2].team = currentObj.team2;
          initialObject[currentObj.team2].played = 1;
          initialObject[currentObj.team2].won = 0;
          initialObject[currentObj.team2].lost = 0;
          initialObject[currentObj.team2].tied = 0;
          initialObject[currentObj.team2].noResult = 1;
          initialObject[currentObj.team2].points = 1;
        }
      


    }else{
         if(currentObj.result.toLowerCase()==="win".toLowerCase() && currentObj.winner.toLowerCase()===currentObj.team2.toLowerCase() ){
          initialObject[currentObj.team2].played = initialObject[currentObj.team2].played + 1;
          initialObject[currentObj.team2].won = initialObject[currentObj.team2].won + 1;
          initialObject[currentObj.team2].points = initialObject[currentObj.team2].points + 2;
         
        }else if (currentObj.result.toLowerCase()==="win".toLowerCase() && currentObj.winner.toLowerCase()!==currentObj.team2.toLowerCase()){
          initialObject[currentObj.team2].played = initialObject[currentObj.team2].played + 1;
          initialObject[currentObj.team2].lost = initialObject[currentObj.team2].lost + 1;
          // initialObject[currentObj.team2].points = 0;  
         
        }
    
        else if(currentObj.result.toLowerCase()==="tie".toLowerCase()){
          initialObject[currentObj.team2].played = initialObject[currentObj.team2].played + 1;
          initialObject[currentObj.team2].tied = initialObject[currentObj.team2].tied + 1;
          initialObject[currentObj.team2].points = initialObject[currentObj.team2].points + 1;
        }
    
        else{
          initialObject[currentObj.team2].played = initialObject[currentObj.team2].played + 1;
          initialObject[currentObj.team2].noResult =  initialObject[currentObj.team2].noResult + 1;
          initialObject[currentObj.team2].points = initialObject[currentObj.team2].points + 1;
        }
    
      }

    }

  }
  // console.log(initialObject);
  const arrayOfArray = Object.entries(initialObject);
  // console.log(arrayOfArray);
 let sortedArray =  arrayOfArray.sort((a,b)=>{
               if(b[1].points-a[1].points!==0){
                return b[1].points-a[1].points ;
               }else{
                return a[0].localeCompare(b[0]);
               }
  });
 
 const mapping = sortedArray.map((currentStats)=>{
  return currentStats[1];
 });
 console.log(mapping);

 return mapping;
 


}
iplPointsTable([
    { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
    { team1: "RCB", team2: "CSK", result: "tie" },
  ]);






    
    
    
    
      













   
     
  
    

    
    








  
    

  
  
  
  
  
  
  
  
  
  
  
  
      
      
      
      
      
      
      
      
    


  
  



        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        