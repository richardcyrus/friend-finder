/* global jQuery */

/**
 * friend-finder Survey page handler.
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2018 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

;(function ($) {
  const form = $('#surveyForm')
  const displayMatch = $('#match-modal')
  const matchName = $('#match-name')
  const matchImage = $('#match-image')

  function matchParticipant(data) {
    $.post('/api/friends', data)
      .done(function (match) {
        matchName.text(match.name)
        matchImage.attr({
          src: match.photo,
          alt: match.name,
        })

        // Show the user the best match.
        displayMatch.modal('toggle')
      })
      .fail(function (error) {
        console.error(error)
      })
  }

  form.on('submit', function (event) {
    /**
     * Trigger client side form validation.
     *
     * The checkValidity() call has to occur on a form node.
     *
     * $(this) = [form#surveyForm.needs-validation]
     * $(this)[0] = the full form HTML with all fields.
     */
    if ($(this)[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.addClass('was-validated')

    // If the form has been completed correctly, process it.
    if (!event.isDefaultPrevented()) {
      event.preventDefault()

      const record = {
        name: null,
        photo: null,
        scores: [],
      }

      $.each($('input'), function () {
        if ($(this).is('input[name="name"]')) {
          record.name = $(this).val().trim()
        } else if ($(this).is('input[name="photo"]')) {
          record.photo = $(this).val().trim()
        } else if ($(this).is('input[name="q1"]:checked')) {
          record.scores.push(parseInt($(this).val()))
        } else if ($(this).is('input[name="q2"]:checked')) {
          record.scores.push(parseInt($(this).val()))
        } else if ($(this).is('input[name="q3"]:checked')) {
          record.scores.push(parseInt($(this).val()))
        } else if ($(this).is('input[name="q4"]:checked')) {
          record.scores.push(parseInt($(this).val()))
        } else if ($(this).is('input[name="q5"]:checked')) {
          record.scores.push(parseInt($(this).val()))
        } else if ($(this).is('input[name="q6"]:checked')) {
          record.scores.push(parseInt($(this).val()))
        } else if ($(this).is('input[name="q7"]:checked')) {
          record.scores.push(parseInt($(this).val()))
        } else if ($(this).is('input[name="q8"]:checked')) {
          record.scores.push(parseInt($(this).val()))
        } else if ($(this).is('input[name="q9"]:checked')) {
          record.scores.push(parseInt($(this).val()))
        } else if ($(this).is('input[name="q10"]:checked')) {
          record.scores.push(parseInt($(this).val()))
        }
      })

      // Check that the provided URL for the image
      // has the image available.
      $.ajax({ method: 'HEAD', url: record.photo }).then(
        function (data, status, jqXHR) {
          if (jqXHR.status === 200) {
            // Remove the validation status classes
            form.removeClass('was-validated')
            $('input[name="photo"]').removeClass('is-invalid')

            // Reset the form to empty values.
            form[0].reset()

            // Send the data to the backend and get the match.
            matchParticipant(record)
          }
        },
        function (jqXHR) {
          // TODO: This will fail a CORS violation with no action.
          // i.e: Access-Control-Allow-Origin not set on other side.
          if (jqXHR.status === 404) {
            // Change the validation status classes.
            form.removeClass('was-validated').addClass('needs-validation')

            $('input[name="photo"]').addClass('is-invalid')
          }
        }
      )

      return false
    }
  })
})(jQuery)
