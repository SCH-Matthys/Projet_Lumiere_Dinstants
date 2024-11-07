let contentEventMar=document.querySelector(".content_event");
let titleEventMar=document.querySelector(".title_event");
let textEventMar=document.querySelector(".text_event");
let items=[]


titleEventMar.addEventListener("mouseover",()=>{
      contentEventMar.style.visibility ="visible";
})
contentEventMar.addEventListener("mouseout", () => {
      contentEventMar.style.visibility = "hidden";
      titleEventMar.style.visibility="visible";
});