function pillars(num_pill, dist, width) {
    if (num_pill === 1){
      return 0 
    } 
    let pillarDistance = (num_pill-2) * width 
    let inBetween = dist * (num_pill-1) * 100
    return pillarDistance + inBetween
}
  
