(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBA50olPzWGi0Jz3WCq5M3y-7zY4-Wd-IE",
        authDomain: "coffee-quiz-303.firebaseapp.com",
        databaseURL: "https://coffee-quiz-303.firebaseio.com",
        projectId: "coffee-quiz-303",
        storageBucket: "",
        messagingSenderId: "371824733792"
      };

    firebase.initializeApp(config);

    var txtEmail = document.getElementById('txtEmail');
    var logEmail = document.getElementById('logEmail');
    var txtPassword = document.getElementById('txtPassword');
    var logPassword = document.getElementById('logPassword');
    var btnLogin = document.getElementById('btnLogin');
    var btnSignUp = document.getElementById('btnSignUp');
    var btnLogout = document.getElementById('btnLogout');

    btnLogin.addEventListener('click', e => {

        event.preventDefault();

        var email = logEmail.value;
        var pass = logPassword.value;
        var auth = firebase.auth();

        var promise = auth.signInWithEmailAndPassword(email, pass)

        promise.catch(e => console.log(e.message))
            .then(
                function () {
                    var user = firebase.auth().currentUser;
                    var userRoute = "/current/" + user.uid;
                    window.location.href = userRoute;
            });
    });


    btnSignUp.addEventListener('click', e => {

        event.preventDefault();

        var email = txtEmail.value;
        var pass = txtPassword.value;
        var auth = firebase.auth();

        var promise = auth.createUserWithEmailAndPassword(email, pass);
            
        $('#exampleModal .close').click();

        promise.catch(e => console.log(e.message))
            .then(
                function () {
                    window.location.href = "/survey";
            });
    });


    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        window.location.href = "/";
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');
        } else {
            console.log("Not Logged In");
            btnLogout.classList.add('hide');
        }
    });

}());


var user = firebase.auth().currentUser;
var uid, email;

if (user !== null) {
    email = user.email;
    uid = user.uid;
}
    
    $("#sendEmailBtn").on("click", function() {

            event.preventDefault();

            var user = firebase.auth().currentUser;

            var userInfo = {
                email: user.email
            }
              
              $.post("/email", userInfo)
              .done(function() {
                alert('Coffee Info Emailed!')

              });

    });