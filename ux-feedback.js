(()=>{
  const flash=(btn)=>{
    if(!btn)return;
    btn.classList.remove("tap-flash","tap-confirm");
    void btn.offsetWidth;
    btn.classList.add("tap-flash");
    if(btn.closest(".utility"))btn.classList.add("tap-confirm");
    setTimeout(()=>btn.classList.remove("tap-flash","tap-confirm"),320);
  };
  document.addEventListener("click",e=>flash(e.target.closest("button")),true);
})();
