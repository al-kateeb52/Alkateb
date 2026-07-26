// ===============================
// عند تحميل الصفحة
// ===============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");
    const container = document.querySelector(".container");

    // إخفاء المحتوى مؤقتًا
    if (container) {
        container.style.opacity = "0";
        container.style.transform = "translateY(25px)";
    }

    // إخفاء شاشة البداية بعد ثانيتين
    setTimeout(function () {

        if (loader) {
            loader.classList.add("hide");
        }

        // إظهار الصفحة
        setTimeout(function () {

            if (container) {
                container.style.transition = "all .6s ease";
                container.style.opacity = "1";
                container.style.transform = "translateY(0)";
            }

        }, 300);

    }, 2000);

});


// ===============================
// تأثير الضغط على البطاقات
// ===============================

document.querySelectorAll(".card").forEach(function(card){

    card.addEventListener("click",function(){

        this.style.transform="scale(.97)";

        setTimeout(()=>{

            this.style.transform="scale(1)";

        },150);

        // اهتزاز بسيط لو الجهاز يدعمه
        if(navigator.vibrate){
            navigator.vibrate(20);
        }

    });

});


// ===============================
// حركة بسيطة للصورة
// ===============================

const profile=document.querySelector(".profile");

if(profile){

    setInterval(()=>{

        profile.animate([

            {transform:"translateY(0px)"},

            {transform:"translateY(-6px)"},

            {transform:"translateY(0px)"}

        ],{

            duration:2500,

            iterations:1

        });

    },2600);

}


// ===============================
// زر الحجز
// ===============================

const book=document.getElementById("bookNow");

if(book){

    book.addEventListener("click",function(e){

        e.preventDefault();

        const phone="201274884652"; // ضع رقمك

        const message=`السلام عليكم

أرغب في الحجز مع أ/ يسري حسونه.

الاسم:
الصف الدراسي:
رقم الهاتف:
`;

        window.open(

            "https://wa.me/"+phone+"?text="+encodeURIComponent(message),

            "_blank"

        );

    });

}


// ===============================
// رسالة الترحيب
// ===============================

const hour=new Date().getHours();

if(hour<12){

    console.log("صباح الخير");

}else if(hour<18){

    console.log("أهلًا بك");

}else{

    console.log("مساء الخير");

}