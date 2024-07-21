const coaches = [
    { name: 'Coach A', gender: 'Male', yearsOfCoaching: 1, description: 'Experienced coach' },
    { name: 'Coach B', gender: 'Male', yearsOfCoaching: 5, description: 'Experienced coach' },
    { name: 'Coach C', gender: 'Male', yearsOfCoaching: 10, description: 'Experienced coach' },
    { name: 'Coach D', gender: 'Female', yearsOfCoaching: 1, description: 'Experienced coach' },
    { name: 'Coach E', gender: 'Female', yearsOfCoaching: 5, description: 'Experienced coach' },
    { name: 'Coach F', gender: 'Female', yearsOfCoaching: 10, description: 'Experienced coach' },


  ];



const lessons = [
    {name: 'Lesson A', coach:'coach A', level: 1, target: 1 ,type: 'Losing Weight', description: 'Experienced coach' },
    {name: 'Lesson B', coach:'coach B', level: 2, target: 2 ,type: 'Muscle Building',description: 'Experienced coach' },
    {name: 'Lesson B', coach:'coach B', level: 3, target: 3 ,type: 'Cardio Training',description: 'Experienced coach' },
]

function formLessons(l){
    const cards = document.getElementById('cards');
    cards.innerHTML = '';
    l.forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'card_lesson';
        card.innerHTML = `
            <p style="font-size: 3vh; font-weight: bold; margin-left: 10%;">${lesson.name}</p>
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%; margin-top: 2vh;">${lesson.coach}</p>
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%; margin-top: 2vh;">Level ${lesson.level} lesson</p>
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%; margin-top: 2vh;">Type: ${lesson.type} </p>
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%; margin-top: 2vh;">${lesson.description}</p>
            <button class = "button_sub" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Select</button>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Confirmation!</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    You have been added to the memberlist!
                </div>
                <div class="modal-footer">
                  <button type="button" style="background-color: #FF6711; border: 0px; color: white;" data-bs-dismiss="modal">Understood</button>
                </div>
              </div>
            </div>
          </div>
        `;
        cards.appendChild(card);
    });
}

function select(n){
    if (n == 1){
        document.getElementById("lessons_options").style.display = "none";
        document.getElementById("coaches_options").style.display = "block";
        formCoaches(coaches)
        
    }
    else{
        document.getElementById("coaches_options").style.display = "none";
        document.getElementById("lessons_options").style.display = "block";
        formLessons(lessons)
    }
}

function formCoaches(l){

    const cards = document.getElementById('cards');
    cards.innerHTML = '';
    l.forEach(coach => {
        const card = document.createElement('div');
        card.className = 'card_coach';
        card.innerHTML = `
            <p style="font-size: 3vh; font-weight: bold; margin-left: 10%;">${coach.name}</p>
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%; margin-top: 2vh;">${coach.gender}</p>
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%; margin-top: 2vh;">${coach.yearsOfCoaching} Years of Coaching</p>
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%; margin-top: 2vh;">${coach.description}</p>
            <button class = "button_sub" onClick = "toCommunicate()">Contact</button>
        `;
        cards.appendChild(card);
    });
}

function toCommunicate(){
    window.location.href = "./communicate.html";
}


function apply(n){
    if (n==1){
        var flag_1 = false
        var flag_2 = false
        var list_coach = [true, true, true ,true, true]
        var male = document.getElementById('male')
        var female = document.getElementById('female')
        var year_1 = document.getElementById('year_1')
        var year_2 = document.getElementById('year_2')
        var year_3 = document.getElementById('year_3')
        var display_coach = []

        if (male.checked){
            list_coach[0] = true
        }
        else{
            list_coach[0] = false
        }

        if (female.checked){
            list_coach[1] = true
        }
        else{
            list_coach[1] = false
        }

        if (year_1.checked){
            list_coach[2] = true
        }
        else{
            list_coach[2] = false
        }

        if (year_2.checked){
            list_coach[3] = true
        }
        else{
            list_coach[3] = false
        }

        if (year_3.checked){
            list_coach[4] = true
        }
        else{
            list_coach[4] = false
        }

        for (var i=0;i<list_coach.length;i++){
            console.log('coach', list_coach[i])
            if (list_coach[i]&&i<2){
                console.log('a') 
                flag_1 = true
            }
            else if (list_coach[i]&&i>=2){
                console.log('b') 
                flag_2 = true
            }
        }

        
            for (var i=0; i<coaches.length; i++){
                var coach = coaches[i]
                if (flag_1){
                    if((coach.gender == "Male"&&list_coach[0])||(coach.gender == "Female"&&list_coach[1])){
                        if (flag_2){
                            if ((coach.yearsOfCoaching == 1&&list_coach[2])||(coach.yearsOfCoaching > 1&&coach.yearsOfCoaching <=5&&list_coach[3])||(coach.yearsOfCoaching>5&&list_coach[4])){  
                                display_coach.push(coach)}
                        }
                        else{
                            display_coach.push(coach)
                        }
                    }                   
                    
                }
                else {
                    if (flag_2){
                        if ((coach.yearsOfCoaching == 1&&list_coach[2])||(coach.yearsOfCoaching > 1&&coach.yearsOfCoaching <=5&&list_coach[3])||(coach.yearsOfCoaching>5&&list_coach[4])){
                            display_coach.push(coach)}
                    }
                    else{ 
                        display_coach.push(coach)
                    }
                }
            }
        


        formCoaches(display_coach)

    }
    else if(n==2){
        var flag_1 = false
        var flag_2 = false
        var list_lesson = [true, true, true ,true, true, true]
        var l_w = document.getElementById('l_weight')
        var m_b = document.getElementById('m_building')
        var c_t = document.getElementById('c_training')
        var l_1 = document.getElementById('level_1')
        var l_2 = document.getElementById('level_2')
        var l_3 = document.getElementById('level_3')
        var display_lessons = []

        if (l_w.checked){
            list_lesson[0] = true
        }
        else{
            list_lesson[0] = false
        }
        if (m_b.checked){
            list_lesson[1] = true
        }
        else{
            list_lesson[1] = false
        }
        if (c_t.checked){
            list_lesson[2] = true
        }
        else{
            list_lesson[2] = false
        }
        if (l_1.checked){
            list_lesson[3] = true
        }
        else{
            list_lesson[3] = false
        }
        if (l_2.checked){
            list_lesson[4] = true
        }
        else{
            list_lesson[4] = false
        }
        if (l_3.checked){
            list_lesson[5] = true
        }
        else{
            list_lesson[5] = false
        }

        for (var i=0;i<list_lesson.length;i++){
            if (list_lesson[i]&&i<3){ 
                flag_1 = true
            }
            else if (list_lesson[i]&&i>=3){
                flag_2 = true
            }
        }

        for (var i=0; i<lessons.length; i++){
            var lesson = lessons[i]
            if (flag_1){
                if((lesson.target==1&&list_lesson[0])||(lesson.target==2&&list_lesson[1])||(lesson.target==3&&list_lesson[2])){
                    if(flag_2){
                        if ((lesson.level==1&&list_lesson[3])||(lesson.level==2&&list_lesson[4])||(lesson.level==3&&list_lesson[5])){
                            display_lessons.push(lesson)
                        }
                    }
                    else{
                        display_lessons.push(lesson)
                    }
                    
                }

            }
            else{
                if(flag_2){
                    if ((lesson.level==1&&list_lesson[3])||(lesson.level==2&&list_lesson[4])||(lesson.level==3&&list_lesson[5])){
                        display_lessons.push(lesson)
                    }
                }
                else{
                    display_lessons.push(lesson)
                }
            }
        }

        formLessons(display_lessons)

    }

}