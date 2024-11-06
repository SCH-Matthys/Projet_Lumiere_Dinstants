let contentEvent=document.querySelector(".content_event");
let titleEvent=document.querySelector(".title_event");
let textEvent=document.querySelector(".text_event");
let mariages="Mariages"

textEvent.addEventListener("mouseover",()=>{
      mariages.style.display ="block";
})
textEvent.addEventListener("mouseout", () => {
      contentEvent.style.visibility = "hidden";
      textEvent.style.display="block";
});