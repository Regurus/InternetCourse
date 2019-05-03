

$.validator.setDefaults({

});
$().ready(function() {
    // validate signup form on keyup and submit
    $("#signupForm").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
            },
            reg_password: {
                required: true,
            },
            confirm_password: {
                required: true,
                equalTo: "#reg_password",
            },

        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Passwords not match"
            },
        },
        submitHandler: function() {
            var newUserData = {password:document.getElementById('reg_password').value,firstname:document.getElementById('reg_firstname').value,lastname:document.getElementById('reg_lastname').value};
            usersDictionary[document.getElementById('reg_username').value]=newUserData
            alert("Registered!");
            hideAlllExcept('login');
        }
    });
    $("#loginForm").validate({
        rules: {
            username: {
                required: true,
            },
            password: {
                required: true,
            },
        },
        messages: {
            username: {
                required: "Please enter a username",
            },
            password: {
                required: "Please provide a password",
            },
        },
        submitHandler: function() 
        {
            if(usersDictionary[document.getElementById('login_username').value]['password']==document.getElementById('login_password').value){
                logged = true;
            }
            else{
                logged = false;
            }
            if(logged)
                alert("Login success!");
            else
                alert("Login Fail!");
            removeMenuItem("fa-home");
            addMenuItem("fa-gamepad", callGame);
            addMenuItem("fa-refresh", resetGame);
            addMenuItem("fa-sign-out", resetLogin);
        }

    });
    // propose username by combining first- and lastname
    $("#username").focus(function() {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        if (firstname && lastname && !this.value) {
            this.value = firstname + "." + lastname;
        }
    });
});
function addMenuItem(icon,callback){//callback onclick
    var classname = "fa "+icon+" fa-4x";
    var menu = document.getElementById('menuItems');
    var item = document.createElement("I");
    item.className=classname;
    item.style="color:#000000;";//menu item color
    item.addEventListener('click',callback);
    //var item = document.createElement('<i class="'+icon+' fa-4x" style="color:#FFFFFF;" onclick="'+onclick+'"></i>');
    menu.appendChild(item);
    menu.appendChild(document.createTextNode(" "));
    hideAlllExcept('settings');
}
function removeMenuItem(icon){
    var menu = document.getElementById('menuItems');
    var children = menu.childNodes;
    for(i=0;i<children.length;i++){
        if(children[i].className==="fa "+icon+" fa-4x"){
            menu.removeChild(menu.childNodes[i]);
        }
    }
}
function callGame(){
    hideAlllExcept('game');
}
function callHome(){
    hideAlllExcept('welcome');
}

function resetLogin(arg){
    logged=false;
    addMenuItem("fa-home",callHome);
    removeMenuItem("fa-gamepad");
    removeMenuItem("fa-sign-out");
    removeMenuItem("fa-refresh");
    hideAlllExcept('welcome');
}

