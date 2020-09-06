$('.tel-mask').inputmask({
    mask: "+99 999 999 99 99",
    placeholder: '',
    showMaskOnHover: false
});
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
})