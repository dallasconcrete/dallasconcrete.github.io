$(document).ready(function() {
    "use strict";

    $("#contact_form").validate({
        onfocusout: !1,
        onkeyup: !1,
        rules: {
            name: "required",
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0,
                phoneUS: !0
            },
            address: {
                required: !0,
                minlength: 13,
                maxlength: 200
            }
        },
        errorPlacement: function(e, t) {
            e.insertBefore(t)
        },
        messages: {
            name: "What's your name?",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            },
            phone: {
                required: "What's your phone #?",
                phoneUS: "Please enter a valid phone #"
            },
            address: {
                required: "What's your full address?",
                minlength: "Please enter your full address (City, State, Zip)",
                maxlength: "Please enter a valid address"
            }
        },
        highlight: function(e) {
            $(e).text("").addClass("error");
        },
        success: function(e) {
            e.text("").addClass("valid");
        }
    });

});

$('.closeModal').on('click', function(e) {
    e.preventDefault();
    $("#modalContact").modal("hide"),
    $('.tg-login-lightbox').slideToggle(),
    $('.modal-backdrop').slideToggle(),
    $('.modal-open').toggleClass()

});
