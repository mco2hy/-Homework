var Homework1 = {
    Page: {
        Home: {
            Index: {

            }
        },
        Homework1: {
            Index: {
                Send: function () {
                    var name = $("#Name").val();
                    var surname = $("#Surname").val();
                    var email = $("#Email").val();
                    var message = $("#Message").val();

                    if (name.length < 2 || name.length > 50) {
                        alert("Adınız 2 karakterden küçük 50 karakterden fazla olamaz, tatlım.. :* <3 ")
                        return;
                    }

                    if (surname.length < 2 || surname.length > 50) {
                        alert("Soyadınız 2 karakterden küçük 50 karakterden fazla olamaz, tatlım.. :* <3 ")
                        return;
                    }

                    else if (email.length < 6 || email.length > 345) {
                        alert("Emailiniz 6 karakterden küçük 345 karakterden fazla olamaz, tatlım.. :* <3 ")
                        return;
                    }
                    else if (!Homework1.Helper.IsEmail(email)) {
                        alert("Email adresi hatalı, tatlım.. :* <3 ")
                        return;
                    }
                    else if (message.length < 2 || message.length > 1024) {
                        alert("Mesajınız 2 karakterden küçük 1024 karakterden fazla olamaz, tatlım.. :* <3 ")
                        return;
                    }

                    $("#Homework1-Index-Form").hide();
                    $("#Homework1-Index-Sending").show();

                    var data = {
                        Name: name,
                        Surname: surname,
                        Email: email,
                        Message: message
                    };

                    var json = JSON.stringify(data);

                    $.ajax({
                        type: "POST",
                        url: "/Homework1/SendAction",
                        data: json,
                        success: Homework1.Page.Homework1.Index.Send_Callback,
                        error: Homework1.Page.Homework1.Index.Send_Callback_Error,
                        dataType: "json",
                        contentType: "application/json;charset=utf-8"
                    });
                },
                Send_Callback: function (result) {

                    $("#Homework1-Index-Sending").hide();
                    $("#Homework1-Index-Sent").show();
                    console.log(result);
                },
                Send_Callback_Error: function (result) {
                    console.log(result);
                }
                
            }
        }
    },
    Helper: {
        IsEmail: function (email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }
    }
}