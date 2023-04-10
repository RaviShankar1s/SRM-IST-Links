/* pld navbar hai
burger = document.querySelector('.burger')
            navbar = document.querySelector('.navbar')
            navbarul = document.querySelector('.navbar ul')
            rightNav = document.querySelector('.rightNav')
            
            burger.addEventListener('click', ()=>{
                rightNav.classList.toggle('v-class-resp')
                navbarul.classList.toggle('v-class-resp')
                navbar.classList.toggle('h-nav-resp')
            })
            *\
/* new navbar ke Liye Script Hai */

        const body = document.querySelector("body");
        const navbar = document.querySelector(".navbar");
        const rightNav = document.querySelector(".rightNav")
        const menuList = document.querySelector(".menu-list");
        const menuBtn = document.querySelector(".menu-btn");
        const cancelBtn = document.querySelector(".cancel-btn");

        menuBtn.onclick = ()=>{
            menuList.classList.add("active");
            menuBtn.classList.add("hide");
            body.classList.add("disabledscroll");
        }
        cancelBtn.onclick = ()=>{
            menuList.classList.remove("active");
            menuBtn.classList.remove("hide");
            body.classList.remove("disabledscroll");
        }

        
/* Login ke Liye Script Hai */
var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btns");

    function register(){
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";
    }
    function login(){
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0px";
    }

    /* Timer shoping facility Ke Liye hai */
function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";
        

        var months = ["January", "Febuary", "March", "April", "May", "June", 'July', "August", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        var values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe ];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}

        /* rahi feauture facility Ke Liye hai */

    var smallImg = document.getElementById("smallimg")
    var rahiBox = document.getElementById("rahi-box");
    // function onTherahi(){
    //     smallImg.src ="Images/rahi-box.jpg";
    // }
    function onTherahi(){
            smallImg.src ="Images/Robot.png";
        }
    function onWebdesignforstartup(){
        smallImg.src ="Images/website design.png";
        
    }
    function onPrograming(){
        smallImg.src ="Images/coding.png";
    }
    function onWebsitemaker(){
        smallImg.src ="Images/research.png";
    }
    function imageSize(){
                if(rahiBox.className == "small"){
                    rahiBox.className = "full";
                
                }
                else{
                    rahiBox.className = "small";
                }
    }
   /* image slider ke liye  */
   var counter = 1;
   setInterval(function(){
       document.getElementById('radio' + counter).checked = true;
       counter++;
       if(counter > 4){
           counter = 1;
       }
   }, 4500); /*5000*/


    /* Thanks Ke Liye hai */

    let popup = document.getElementById("popup");

    function openpopup(){
        popup.classList.add("open-popup");
    }
    function closepopup(){
        popup.classList.remove("open-popup");
    }


    // Online chat ka halp custom.js mai or half resp.js mai script

    function getBotResponse(input) {
        //rock paper scissors
        if (input == "rock") {
            return "paper";
        } else if (input == "paper") {
            return "scissors";
        } else if (input == "scissors") {
            return "rock";
        }
    
        // Simple responses
        if (input == "hello") {
            return "Hello there!";
        } else if (input == "goodbye") {
            return "Talk to you later!";
        } else {
            return "Try asking something else!";
        }
    }


    

            
            
    questionFirst = $('[data-question]:first').attr('data-question');
    $('#chatList ul').append('<li class="admin-message">'+questionFirst+'</li>');
    $('[data-question]:first').appendTo('.message-box');


    $("#send").click(function(event) {
        questionVal = $('.message-box [data-question]').val();
        $("#chatList ul").append('<li class="client-message">'+questionVal+'</li>');
        dataName = $('.admin-client-message-wrap [data-name]').attr('data-question');
        if($('.message-box [name]').attr('name')== "name"){
            nameVal = $('.message-box [name]').val();
            $('.admin-client-message-wrap [data-name]').attr('data-question', "Hi " +nameVal+",</br>"+dataName );
        }

        $('.message-box [data-question]').appendTo('.submit_info');
    
        
        if($('.admin-client-message-wrap').children().length != 0){
        questionFirst = $('[data-question]:first').attr('data-question');
        $('#chatList ul').append('<li class="admin-message">'+questionFirst+'</li>');
        $('[data-question]:first').appendTo('.message-box');
        

        $('#send').css({"pointer-events":"none"});
        $('.message-box [data-question]').bind('click change keyup', function(event) {
            if($(this).val() == ""){
                $('#send').css({"pointer-events":"none"});
            }else{
                $('#send').css({"pointer-events":"auto"});
            }
        });
    }

        $('#chatList').animate({scrollTop:5000})
    });

    $('.message-box [data-question]').bind('click change keyup', function(event) {

        if($(this).val() == ""){
            $('#send').css({"pointer-events":"none"});
        }else{
            $('#send').css({"pointer-events":"auto"});
        }
        
    });

    $("#confirm").click(function(event){
            $('#submit').trigger('click');
    });
    $("#notconfirm").click(function(event){
        
        location.reload();
});

$('.chat_icon').click(function(event) {
    $('.chatbot-box').toggleClass('active');
});

