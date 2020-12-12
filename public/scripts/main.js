function sendEmail(email, subject, content) {
    console.log(`sending email to ${email} subject:${subject} content:${content}`);

    emailData = { subject : subject , email : email , content : content}

    $.ajax({
        url: "https://obscure-plateau-25160.herokuapp.com/sendEmail",
        type: "POST",
        crossDomain: true,
        data: emailData,
        dataType: "json"            
    });
}
