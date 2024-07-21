var n = 1;

function setProgress(){
    var bar = document.getElementById("progressBar")
    n++
    if (n==1){
        bar.style.width = '33%'
    }
    else if (n==2){
        bar.style.width = '66%'
    }
    else if (n==3){
        bar.style.width = '100%'
    }
    else {
        n = 0;
    }
}

function confirm(){
    if (document.getElementById('username').value == ""||document.getElementById('password').value==""){
        document.getElementById('warn').style.display = "block"
    }
    else{
        setProgress()
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('Step 1 - Username:', username, 'Password:', password);
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    }
    
}

function selectMembership(n){
    window.shareData.membership = n
    console.log(window.shareData.membership)
    setProgress()
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}

function toProfile(){
    window.location.href = "./profile.html"
}

function back(){
    document.getElementById('step3').style.display = 'none';
    confirm()
}