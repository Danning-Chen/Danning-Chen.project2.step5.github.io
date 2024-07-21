function update(){
    const message = document.getElementById('messages');
    /*messages.innerHTML = '';*/
    const input = document.getElementById('input')
    var text = input.value
    const textField = document.createElement('div');
    textField.innerHTML = `
            <p style="font-size: 2vh; font-weight: bold; margin-left: 10%;">${text}</p>
        `;
    message.appendChild(textField);
    input.value=""
}