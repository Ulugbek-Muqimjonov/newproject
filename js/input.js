const elForm = document.querySelector(".hero__form");
const elName = document.querySelector(".hero__item-name");
const eldesc = document.querySelector(".hero__item-summary");
const eliimgdiv = document.querySelector(".hero__item-input-img");
const img_input = document.querySelector("#item-img");
var upload_img = "";

img_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", function() {
        upload_img = reader.result;
        document.querySelector(".hero__item-input-img").style.backgroundImage = `url(${upload_img})`;
    });
    reader.readAsDataURL(this.files[0]);
})

const new_array = [];
elForm.addEventListener("submit",evt => {
    evt.preventDefault();
    console.log(evt);
    const elNameVal = elName.value.trim();
    const eldescVal = eldesc.value.trim();
    // const eliimgdiVal = eliimgdiVal

    console.log(elNameVal,eldescVal,eliimgdiv);

    const my_obj = {
        name:elNameVal,
        desc:eldescVal,
        img:eliimgdiv,
    }
    new_array.push(my_obj);
    console.log(new_array);

})