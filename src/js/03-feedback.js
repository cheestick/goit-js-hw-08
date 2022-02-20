import throttle from 'lodash.throttle';

const FEEDBACK_STATE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
const emailRef = formRef.querySelector('input[name="email"]');
const messageRef = formRef.querySelector('textarea[name="message"]');

(function fillFormFieldsFromLS() {
  const initialFormObj = JSON.parse(localStorage.getItem(FEEDBACK_STATE_KEY));

  if (initialFormObj) {
    emailRef.value = initialFormObj.email || '';
    messageRef.value = initialFormObj.message || '';
  }
})();

formRef.addEventListener(
  'input',
  throttle(e => {
    const formElement = e.target;
    const lsData = JSON.parse(localStorage.getItem(FEEDBACK_STATE_KEY)) || {};

    lsData[formElement.name] = formElement.value;
    localStorage.setItem(FEEDBACK_STATE_KEY, JSON.stringify(lsData));
  }, 500),
);

formRef.addEventListener('submit', e => {
  e.preventDefault();
  getFormData(formRef);
  formRef.reset();
  localStorage.removeItem(FEEDBACK_STATE_KEY);
});

function getFormData(form) {
  const formData = Object.create(null);
  new FormData(form).forEach((value, field) => (formData[field] = value));
  console.log(formData);
  return formData;
}
