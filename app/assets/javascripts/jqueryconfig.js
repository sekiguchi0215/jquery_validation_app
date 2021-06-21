import { $ } from '@rails/ujs'

$(function () {
  $('#form').validate({
    rules: {
      'user[name]': {
        required: true,
      },
      'user[email]': {
        required: true,
      },
      'user[phone]': {
        required: true,
      },
    },
  })
})
