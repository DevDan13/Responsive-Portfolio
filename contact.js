$(document).ready(function () {
    $(".submit").on("click", function(event){
        //console.log("clicked button");

        let email = $(".email").val();
        let subject = $(".subject").val();
        let message = $(".message").val();

        let emailStatusElm = $(".emailStatus");
        emailStatusElm.empty();

        let subjectStatusElm = $(".subjectStatus");
        subjectStatusElm.empty();

        let messageStatusElm = $(".messageStatus");
        messageStatusElm.empty();

        if(email.length > 5 && email.length < 31 && email.includes("@") && email.includes(".")) {
            //console.log("valid email!!!");
            emailStatusElm.append("<div class='valid'>E-mail is valid</div>");
        }
        else {
            //console.log("invalid email!!!");
            event.preventDefault();
            emailStatusElm.append("<div class='invalid'>Invalid E-mail</div>");
        }

        if(subject.length > 1 && subject.length < 21){
            subjectStatusElm.append("<div class='valid'>Valid subject</div>");
        }
        else{
            event.preventDefault();
            subjectStatusElm.append("<div class='invalid'>Invalid subject</div>");
        }

        if(message.length > 1 && message.length < 500){
            messageStatusElm.append("<div class='valid'>Message can be sent</div>");
        }
        else{
            event.preventDefault();
            messageStatusElm.append("<div class='invalid'>Message cannot be sent</div>");
        }
    })
})