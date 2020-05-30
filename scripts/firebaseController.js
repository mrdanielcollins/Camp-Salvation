// Firebase public config
var firebaseConfig = {
    apiKey: "AIzaSyCJff0na_IkoveOBTG9QFkak1ayojPZiZ8",
    authDomain: "camp-salvation.firebaseapp.com",
    databaseURL: "https://camp-salvation.firebaseio.com",
    projectId: "camp-salvation",
    storageBucket: "camp-salvation.appspot.com",
    messagingSenderId: "189952363383",
    appId: "1:189952363383:web:8944c0b45756624c0c2f72"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/**
  * Handles the sign in button press.
  */
function toggleSignIn() {
    if (firebase.auth().currentUser) {
        // If user is signed in, sign them out
        firebase.auth().signOut();
    } else {
        // Get login information and validate it
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 1) {
            return;
        }
        if (password.length < 1) {
            return;
        }
        // Sign in with email and pass.
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // Display error messages
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
    }
}

function signOut() {
    if (firebase.auth().currentUser) {
        // If we are signed int, Signout
        // and refresh pages
        firebase.auth().signOut();
        location.reload();
    }
}

/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
    // Listening for auth state changes.
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Display sign in content
            var email = user.email;
            email = email.substring(0, email.search('@'));
            document.getElementById('loginDropDown').textContent = email;
            document.getElementById('loginDropDown').dataset.toggle = "dropdown";
            document.getElementById('loginDropDown').dataset.target = "";
            document.getElementById('loginDropDown').style.visibility = "visible!important";
            $('#myModal').modal('hide'); 
        } else {
            // User is signed out.
            // Display signed out content
            document.getElementById('loginDropDown').textContent = 'Staff Login';
            document.getElementById('loginDropDown').dataset.toggle = "modal";
            document.getElementById('loginDropDown').dataset.target = "#myModal";
        }
    });

    // Set event listeners
    document.getElementById('login-btn').addEventListener('click', toggleSignIn, false);
    document.getElementById('logOutBtn').addEventListener('click', signOut, false);
}

initApp();


