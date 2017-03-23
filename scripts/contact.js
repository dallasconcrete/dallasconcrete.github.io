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
    }), $('#contact_form').submit(function() {
        // submit the form
        if($(this).valid()){
            $('#contact_submit').button('loading');
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    contactname: $('#contact_name').val(),
                    contactaddress: $('#contact_address').val(),
                    contactreference: $('#contact_reference').val(),
                    contactphone: $('#contact_phone').val(),
                    contactemail: $('#contact_email').val(),
                    contactmessage: $('#contact_message').val(),
                    contactjob: $('#contact_job').val(),
                    contacttime: $('#contact_time').val()
                },
                success: function() {
                    $('#contact_submit').button('reset'),
                    $("#modalContact .modal-title").html('<i class="icon-paper-plane"></i>Thank You for your request!<br>We will be contacting you shortly.'),
                    $("#modalContact").modal("show"),
                    $('.tg-login-lightbox').slideToggle(),
                    $('.modal-backdrop').slideToggle()
                },
                error: function() {
                    $('#contact_submit').button('reset')
                    $("#modalContact .modal-title").html('<i class="icon-ban"></i>Oh no!<br>Something went wrong!'),
                    $("#modalContact").modal("show");
                }
            });
        // return false to prevent normal browser submit and page navigation
        } else {
            $('#contact_submit').button('reset')
        }
        return false;
    });

});

$('.closeModal').on('click', function(e) {
    e.preventDefault();
    $("#modalContact").modal("hide"),
    $('.tg-login-lightbox').slideToggle(),
    $('.modal-backdrop').slideToggle(),
    $('.modal-open').toggleClass()

});
