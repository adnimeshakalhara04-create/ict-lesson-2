// Stops the recall timer redraw loop once the answer unlocks.
tick=function(q){
  clearInterval(ticker);
  const refresh=()=>{
    if($("#modal").classList.contains("hidden")){
      clearInterval(ticker);
      return;
    }
    const remain=Math.max(0,Math.ceil(((state.timers[q.id]?.unlockAt||0)-Date.now())/1000));
    drawStudy(q);
    if(remain<=0) clearInterval(ticker);
  };
  const remain=Math.max(0,Math.ceil(((state.timers[q.id]?.unlockAt||0)-Date.now())/1000));
  if(remain>0) ticker=setInterval(refresh,500);
  else refresh();
};
