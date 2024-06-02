import {auth} from "./config.js"
import {  signOut } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
const productList = document.querySelector(".main")
fetch('https://65859ecf022766bcb8c90509.mockapi.io/Task', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(tasks => {
  tasks.forEach((task)=>{
    const mainEdit = document.createElement("div")
    mainEdit.classList.add("main__card")
    mainEdit.innerHTML =
    `<div class="img">
        <img class="img" src="${task.image}" alt="">
    </div>
    <div class="card--body">
        <h3 class="card--title">Tên sách: ${task.title}</h3>
        <p class="card--text">Giá: ${task.price}</p>
    </div> `
    productList.appendChild(mainEdit)
  })
}).catch(error => {
  // handle error
})

const logoutButton = document.querySelector(".logout")
const logout = (e) => {
  e.preventDefault()
  signOut(auth).then(() => {
    // Sign-out successful.
    alert("Đăng xuất thành công")
    window.location.href = "/buoi9/project/signinout.html"
  }).catch((error) => {
    // An error happened.
  });
}
logoutButton.addEventListener('click', logout)