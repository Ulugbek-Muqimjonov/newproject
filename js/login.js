const elForm = document.querySelector(".hero__form");
const useremail = elForm.querySelector(".hero__user-email");
const userpassword = elForm.querySelector(".hero__user-password");
const UserInfo  = JSON.parse(localStorage.getItem("data") || "[]");
elForm.addEventListener("submit", evt =>{
    evt.preventDefault();
    const user_email = useremail.value.trim().toLowerCase();
    const userpasswordlValue = userpassword.value.trim();

    const findeduser = UserInfo.find(item => item.user_email == user_email )

    if (findeduser?.user_password == userpasswordlValue) {
        window.location.href = "/index.html";
    }else {
        alert("bunday foydalanuvchi yoq");
        return
    }

})