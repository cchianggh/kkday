document.getElementById("j_submit").onclick = function(){
    //console.log("YYYYYYYYY")
    let j_login_mail = document.getElementById("j_login_mail").value;
    let j_result = document.getElementById("j_result");
    //console.log(score);   
    if(j_login_mail==""){
    j_result.textContent = "請輸入您的電子信箱";
    }

    else{
    document.location.href="j_request.html";
    }
    
            
};  //大括號裡頭是要做的動作
