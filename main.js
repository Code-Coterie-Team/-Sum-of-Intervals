function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let sum=0;
    let first=intervals[0][0];
    let second=intervals[0][1];
    for (let i=1; i<intervals.length;i++){
        const[start,end]=intervals[i];
        if (start>second){
          sum+=second-first;
          first=start;
          second=end;
        }
       else{
           second=Math.max(second,end);
       }
    }
    sum+=second-first;
    return sum;
 }