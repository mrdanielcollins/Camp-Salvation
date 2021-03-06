// send email to camp salvation
function sendEmail(email, subject, content) {
    // Verify data is not empty
    if (email == '' || subject == '' || content == '') {
        return;
    }

    // Validate the email is good
    if (!validateEmail(email)) {
        return;
    }


    // Send email data
    emailData = { subject: subject, email: email, content: content }
    $.ajax({
        url: "https://obscure-plateau-25160.herokuapp.com/sendEmail",
        type: "POST",
        crossDomain: true,
        data: emailData,
        dataType: "json"
    });
} 

// add emil to emaillist
function addEmail(email) {

    // Verify data is not empty
    if (email == '') {
        return false;
    }

    // Validate the email is good
    if (!validateEmail(email)) {
        return false;
    }

    // Send add email
    emailData = { email: email }
    $.ajax({
        url: "https://obscure-plateau-25160.herokuapp.com/addEmail",
        type: "POST",
        crossDomain: true,
        data: emailData,
        dataType: "json"
    });

    return;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
