$(document).ready(function () {
    $.validator.addMethod('regexp', function (value, element, params) {
        var expression = new RegExp(params);
        return this.optional(element) || expression.test(value);
    }),
    $("#register_form").validate({
        rules:
        {
            name:
            {
                required: true,
                minlength: 2,             
            },
            surname:
            {
                required: true,
                minlength: 2,             
            },
			middlename:
            {
                required: true,
                minlength: 2,             
            },
            mail: {
                required: true,
                email: true
            },
            number: {
                required: true,
                regexp: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
            },
			comment:
            {
                required: true,
                minlength: 2,             
            },       
        },
		messages:
        {
            name:
            {
                required:"Поле не заполнено"                      
            },
            surname:
            {
                required:"Поле не заполнено"                      
            },
middlename:
            {
                required:"Поле не заполнено"                      
            },
            mail:
            {
                required:"Введите email",
                email:"Вы ввели неправильный email"
            },
            number: {
                required:"Поле не заполнено",
                regexp: "Вы использовали неправильный формат номера"
            },
			comment:
            {
                required:"Поле не заполнено"                      
            },
        },
    });
});