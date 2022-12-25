const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const num = document.querySelector(".num")
const box = document.querySelector(".box")
const privious = document.querySelector(".privious-text")
x = 0

btn.addEventListener("click", () =>{
  x++
  document.querySelector(".num").textContent = x
});

btn2.addEventListener("click", () =>{
  if (x > 0){
    x--
    document.querySelector(".num").textContent = x
  } else {
    return false
  }
});

btn3.addEventListener("click", () => {
  if (x > 0) {
    const privious = document.createElement('div')
    privious.classList.add("privious-text")
    const priviousText = document.createTextNode(`Privious Result: ${x}`)
    privious.appendChild(priviousText)
    box.insertBefore(privious, box.children[0]);
  } else {
    return false
  }
});