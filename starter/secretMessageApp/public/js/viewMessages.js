document.querySelector("#viewMsg").addEventListener("cick", (e) => {
    const userPasscodeGuess = document.querySelector("#passcode").value;

    const messagesRef = firebase.database().ref();
    messagesRef.on("value", (snapshot) => {
        const data = snapshot.val();
        for(let key in data) {
            if(data[key].passcode == userPasscodeGuess) {
                display(data[key]);
            }
        }
    });
});

function display(messageObject) {
    document.querySelector("#message").innerHTML = messageObject.message;
}