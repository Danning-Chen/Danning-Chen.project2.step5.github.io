function openUp(){
    console.log("openup")
    selectMembership(1)

}

function selectMembership(n){
    console.log(n)
    if (n==1){
        button1 = document.getElementById("b1")
        button1.disabled=true;
        button1.textContent = 'Current Membership';
        button1.style.backgroundColor = 'grey'

        button2 = document.getElementById("b2")
        button2.disabled=false;
        button2.textContent = 'Select';
        button2.style.backgroundColor = 'black'

        button3 = document.getElementById("b3")
        button3.disabled=false;
        button3.textContent = 'Select';
        button3.style.backgroundColor = 'black'
    }
    else if(n==2){
        button1 = document.getElementById("b1")
        button1.disabled=false;
        button1.textContent = 'Select';
        button1.style.backgroundColor = 'black'

        button2 = document.getElementById("b2")
        button2.disabled=true;
        button2.textContent = 'Current Membership';
        button2.style.backgroundColor = 'grey'

        button3 = document.getElementById("b3")
        button3.disabled=false;
        button3.textContent = 'Select';
        button3.style.backgroundColor = 'black'
    }
    else {
        button1 = document.getElementById("b1")
        button1.disabled=false;
        button1.textContent = 'Select';
        button1.style.backgroundColor = 'black'

        button2 = document.getElementById("b2")
        button2.disabled=false;
        button2.textContent = 'Select';
        button2.style.backgroundColor = 'black'

        button3 = document.getElementById("b3")
        button3.disabled=true;
        button3.textContent = 'Current Membership';
        button3.style.backgroundColor = 'grey'
    }
}

function back(){
    window.location.href = "./profile.html"
}

window.onload = openUp;