const elForm = document.querySelector(".hero__form");
const elUsernameinp = elForm.querySelector(".hero__user-name");
const elSurnameinp = elForm.querySelector(".hero__user-surname");
const elEmailinp = elForm.querySelector(".hero__user-email");
const elPasswordinp = elForm.querySelector(".hero__user-password");
const UserInfo = JSON.parse(localStorage.getItem("data") || "[]");


// localStorage.setItem("data",JSON.stringify(UserInfo));

elForm.addEventListener("submit",(evt) => {
    evt.preventDefault();
    const userNameValue = elUsernameinp.value.trim();
    const userSurnameValue = elSurnameinp.value.trim();
    const userEmailValue = elEmailinp.value.trim().toLowerCase();
    const userPasswordValue = elPasswordinp.value.trim();
   
    // bu yerda aniq vaqtni olyapman
    const new_date = new Date();
    const current_day = new_date.getDate();
    const current_month = (new_date.getMonth() + 1).toString().padStart(2,"0");
    const current_year = new_date.getFullYear().toString().padStart(2,"0");
    const current_hour = (new_date.getHours()).toString().padStart(2,"0");
    const current_minute = new_date.getMinutes().toString().padStart();
    
    // bu yerda obeykt yaratib unga qiymat tenglashtirildi
    const user_info = {
        id: UserInfo.length ? UserInfo.length + 1 : 1,
        user_name:userNameValue,
        user_surname:userSurnameValue,
        user_email:userEmailValue,
        user_password:userPasswordValue, 
        user_orders: [],
        registred_date:`${current_day}/${current_month}/${current_year} ${current_hour}:${current_minute}`,
    };
   
    const userid = user_info.id;
    console.log(userid);
    // validatsiya
    if (userNameValue.length < 2 || userNameValue.length >30) {
        alert("ismingizni 2 dan 30 gacha oraliqda kiriting");
        return;
    }
    if (userSurnameValue.length < 2 || userSurnameValue.length >30) {
        alert("familyangizni 2 dan 30 gacha oraliqda kiriting");
        return;
    }
    if (!userEmailValue.endsWith("@gmail.com")) {
        alert("gmalini oxirida @gmail.com bilan yozing");
        return;
    }
    if (userPasswordValue.length < 8) {
        alert("parol 8 dan kam bolmasligi kerak");
        return;
    }
    
    // arrayga saqlash
    UserInfo.push(user_info);
    localStorage.setItem("data",JSON.stringify(UserInfo));
    localStorage.setItem("user_id",user_info.id)

    elUsernameinp.value = "";
    elSurnameinp.value = "";
    elEmailinp.value = "";
    elPasswordinp.value = "";

    window.location.href = "/index.html";
})