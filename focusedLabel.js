document.addEventListener('DOMContentLoaded', function () {
  const inputs = document.querySelectorAll('.inputUser');

  inputs.forEach(input => {
    input.addEventListener('focus', function () {
      input.previousElementSibling.classList.add('focused');
    });

    input.addEventListener('blur', function () {
      if (input.value === '') {
        input.previousElementSibling.classList.remove('focused');
      }
    });
  });
});