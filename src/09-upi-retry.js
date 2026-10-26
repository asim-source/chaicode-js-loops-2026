/**
 * 💸 Bunty ka UPI Payment Retry
 *
 * Bunty apne dost ko paise bhej raha hai UPI se, lekin network thoda
 * flaky hai. Payment kabhi success hota hai, kabhi fail. Bunty ka app
 * automatically retry karta hai with exponential backoff.
 *
 * Rules (use do...while loop):
 *   - outcomes is an array of strings: "success" or "fail"
 *   - ALWAYS attempt at least once (that's why do...while!)
 *   - outcomes[0] is the result of attempt 1, outcomes[1] is attempt 2, etc.
 *   - If the attempt is "success", stop immediately
 *   - If the attempt is "fail", add wait time and try again
 *   - Wait times follow exponential backoff: 1s, 2s, 4s, 8s
 *     (wait time is added AFTER a failed attempt, before next retry)
 *   - Maximum 5 attempts total (if all fail, stop after 5th)
 *   - totalWaitTime = sum of all wait times between attempts
 *
 * Validation:
 *   - Agar outcomes array nahi hai ya empty hai,
 *     return: { attempts: 0, success: false, totalWaitTime: 0 }
 *
 * @param {string[]} outcomes - Array of "success" or "fail" for each attempt
 * @returns {{ attempts: number, success: boolean, totalWaitTime: number }}
 *
 * @example
 *   upiRetry(["fail", "fail", "success"])
 *   // Attempt 1: fail, wait 1s
 *   // Attempt 2: fail, wait 2s
 *   // Attempt 3: success!
 *   // => { attempts: 3, success: true, totalWaitTime: 3 }
 *
 *   upiRetry(["fail", "fail", "fail", "fail", "fail", "fail"])
 *   // 5 attempts all fail, wait: 1+2+4+8 = 15s (no wait after last)
 *   // => { attempts: 5, success: false, totalWaitTime: 15 }
 */
export function upiRetry(outcomes) {
  // Your code here
  let succ = false;
  let attemptTimes = 0;
  let timeTaken1 = 0;
  let timeTaken2 = 0;
  let timeTaken3 = 0;
  let timeTaken4 = 0;
  let totaltimeTaken;
  if(!Array.isArray(outcomes) || outcomes.length===0) {
    return { attempts: 0, success: false, totalWaitTime: 0 }; 
  }
  let i = 0;
  do {
    if(outcomes[i]==="success"){
      succ = true;
      break;
    }
  
     if( i===0 && outcomes[0]==="fail"){
        timeTaken1 = timeTaken1 + 1;
      }
      else if(i===1 && outcomes[1]==="fail"){
        timeTaken2 = timeTaken1 + 1;
      }
    
      else if(i===2 && outcomes[2]==="fail"){
        timeTaken3 = timeTaken2 + 2;
      }
       else if(i===3 && outcomes[3]==="fail" ){
        timeTaken4 = timeTaken3 + 4;
      }else{
        break;
      }
      i = i+1;
     
  }while(i<5 );
  attemptTimes = i+1;
  totaltimeTaken = timeTaken1 + timeTaken2 + timeTaken3 + timeTaken4;
  return{attempts:attemptTimes,success:succ,totalWaitTime:totaltimeTaken};
}




