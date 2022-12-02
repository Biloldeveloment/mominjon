let ochiq=document.querySelector(".rasm img");
setInterval(()=>{
    let src=rasm.getAttribute("src");
    if (src === "photo_2022-12-02_20-52-07.jpg") {
        console.log(1);
        rasm.setAttribute("src", "photo_2022-12-02_20-52-07.jpg");
    }else{
        console.log(2);
        rasm.setAttribute("src", "photo_2022-12-02_20-59-48.jpg")
    }
},4000)