
// 각 이미지 표시 함수
// const showFlower = () => {
//     const imgText = document.querySelector("#imgViewText");
//     const txtWrap = document.querySelector(".txtWrap");
//     const view1 = document.querySelector("#imgView1");

//     // innerHTML은 태그 안에 내용을 바꾸는 것
//     // 속성을 바꿀때는 setAttribute
//     view1.setAttribute("src", "./images/cityFlower.png")
//     imgText.innerHTML = "동백꽃";
//     txtWrap.style.display = "block";
    
// }
// const showBird = () => {
//     const imgText = document.querySelector("#imgViewText");
//     const view1 = document.querySelector("#imgView1");
//     view1.setAttribute("src", "./images/cityBird.png")

//     view1.setAttribute("src", "./images/cityBird.png")
//     imgText.innerHTML = "갈매기";
//     txtWrap.style.display = "block";
    
    
// }
// const showFish = () => {
//     const view1 = document.querySelector("#imgView1");
//     view1.setAttribute("src", "./images/cityFish.png")
// }


// 하나의 함수로 처리
const show = (idx) => {
    const img = ['cityFlower', 'cityBird', 'cityFish'];
    const txt = ['동백꽃', '갈매기' , '고등어'];
    console.log(img[idx], txt[idx]);
    
    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src", `./images/${img[idx]}.png`);
    imgViewText.innerHTML = txt[idx];
    txtWrap.style.display = "block";
}



// DOM 로드 후
 document.addEventListener("DOMContentLoaded", ()=> {

    // 쿼리 셀렉터는 아이디 앞에 #
    /*
    const im1 = document.querySelector("#imgIcon1");
    const im2 = document.getElementById("imgIcon2");
    const im3 = document.querySelector("#imgIcon3");

    im1.addEventListener("mouseover", () => show(0));
    im2.addEventListener("mouseover", () => show(1));
    im3.addEventListener("mouseover", () => show(2));
    */
   const imgIconsItems = document.querySelectorAll(".imgIconItem");
//    console.log(imgIconsItems);

   for(let [k, item] of imgIconsItems.entries()){
    console.log(k, item)
    item.addEventListener("mouseover", () => show(k));

    
   }
   

 });