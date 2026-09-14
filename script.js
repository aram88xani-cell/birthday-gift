const btn=document.getElementById("surpriseBtn");
const letter=document.getElementById("letter");
const input=document.getElementById("photoInput");
const photo=document.getElementById("memoryPhoto");
btn.addEventListener("click",()=>{
  letter.classList.toggle("hidden");
  btn.textContent=letter.classList.contains("hidden")?"اضغطي هنا للمفاجأة 🎁":"أحبك يا أحلى رفيقة 💗";
  if(!letter.classList.contains("hidden")) confetti();
});
input.addEventListener("change",e=>{
  const file=e.target.files[0];
  if(file) photo.src=URL.createObjectURL(file);
});
function confetti(){
  for(let i=0;i<35;i++){
    const s=document.createElement("span");
    s.textContent=["💗","✨","🌸","🎉","💖"][Math.floor(Math.random()*5)];
    s.style.cssText=`position:fixed;left:${Math.random()*100}vw;top:-30px;font-size:${16+Math.random()*18}px;z-index:10;pointer-events:none;animation:fall ${2+Math.random()*2}s linear forwards`;
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),4500);
  }
}
const style=document.createElement("style");
style.textContent="@keyframes fall{to{transform:translateY(110vh) rotate(360deg);opacity:0}}";
document.head.appendChild(style);
