const FEEDBACK_STATE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
const emailRef = formRef.querySelector('input[name="email"]');
const messageRef = formRef.querySelector('textarea[name="message"]');

const initialFormObj = JSON.parse(localStorage.getItem(FEEDBACK_STATE_KEY));

emailRef.value = initialFormObj ? initialFormObj.email : '';
messageRef.value = initialFormObj ? initialFormObj.message : '';

formRef.addEventListener('input', e => {
  const formElement = e.target;
  const lsData = JSON.parse(localStorage.getItem(FEEDBACK_STATE_KEY)) || {};

  lsData[formElement.name] = formElement.value;
  localStorage.setItem(FEEDBACK_STATE_KEY, JSON.stringify(lsData));
});

formRef.addEventListener('submit', e => {
  e.preventDefault();
  const formObj = JSON.parse(localStorage.getItem(FEEDBACK_STATE_KEY)) || {};
  console.log(formObj);
  formRef.reset();
  localStorage.removeItem(FEEDBACK_STATE_KEY);
});
