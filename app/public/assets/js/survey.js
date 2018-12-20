/* global jQuery */

/**
 * friend-finder Survey page handler.
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2018 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

(function($) {
    const form = $('#surveyForm');
    form.on('submit', function(event) {
        /**
         * Trigger client side form validation.
         *
         * The checkValidity() call has to occur on a form node.
         *
         * $(this) = [form#surveyForm.needs-validation]
         * $(this)[0] = the full form HTML with all fields.
         */
        if ($(this)[0].checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.addClass('was-validated');

        // If the form is valid, process it.
        if (!event.isDefaultPrevented()) {
            event.preventDefault();

            const record = {
                name: null,
                photo: null,
                scores: [],
            };

            $.each($('input'), function() {
                if ($(this).is('input[name="name"]')) {
                    record.name = $(this).val();
                } else if ($(this).is('input[name="photo"]')) {
                    record.photo = $(this).val();
                } else if ($(this).is('input[name="q1"]:checked')) {
                    record.scores.push(parseInt($(this).val()));
                } else if ($(this).is('input[name="q2"]:checked')) {
                    record.scores.push(parseInt($(this).val()));
                } else if ($(this).is('input[name="q3"]:checked')) {
                    record.scores.push(parseInt($(this).val()));
                } else if ($(this).is('input[name="q4"]:checked')) {
                    record.scores.push(parseInt($(this).val()));
                } else if ($(this).is('input[name="q5"]:checked')) {
                    record.scores.push(parseInt($(this).val()));
                } else if ($(this).is('input[name="q6"]:checked')) {
                    record.scores.push(parseInt($(this).val()));
                } else if ($(this).is('input[name="q7"]:checked')) {
                    record.scores.push(parseInt($(this).val()));
                } else if ($(this).is('input[name="q8"]:checked')) {
                    record.scores.push(parseInt($(this).val()));
                } else if ($(this).is('input[name="q9"]:checked')) {
                    record.scores.push(parseInt($(this).val()));
                } else if ($(this).is('input[name="q10"]:checked')) {
                    record.scores.push(parseInt($(this).val()));
                }
            });
            // console.log(record);

            // Remove the validation status class.
            form.removeClass('was-validated');

            form[0].reset();

            // $.post('/api/friends', record)
            //     .done(function(data) {
            //         console.log(data);
            //     })
            //     .catch(function(error) {
            //         console.error(error);
            //     });

            // return false;
        }
    });
})(jQuery);
