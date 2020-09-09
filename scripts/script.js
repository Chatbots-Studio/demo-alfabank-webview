if ($('#form').length) {
    $('.required-field').each(function () {
        var input = $(this);
        input.on('input', function () {
            if (input.val().length > 0) {
                input.addClass('populated');
            } else {
                input.removeClass('populated');
            };
            if ($('.required-field').length === $('.required-field.populated').length) {
                $('#connect-btn').removeClass('disabled');
            } else {
                $('#connect-btn').addClass('disabled');
            }
        });
    });
    $('#connect-btn').click(function () {
        if (!($('#connect-btn').hasClass('disabled'))) {
            $(location).attr('href', 'https://m.me/114032010428817?ref=pro');
        }
    })
};

if ($('#my-card').length) {
    $('#enter').click(function () {
        $('.my-card-enter').css('display', 'none');
        $('.my-card-image-open').css('display', 'block');
        $('.my-card').css('background', '#f6f6f7');
    });

    $('.my-card-button').click(function () {
        if ($(this).hasClass('my-card-button-secondary')) {
            return
        } else {
            var newVal = $('#password').val() + $(this).val();
            $('#password').val(newVal);
        }
    })
}

if ($('#advantages').length) {
    $('#two-links').click(function () {
        window.open('https://alfabank.ru/everyday/debit-cards/alfacard/#ApplyCardForm');
        $(location).attr('href', 'https://m.me/114032010428817?ref=max');
    })
}