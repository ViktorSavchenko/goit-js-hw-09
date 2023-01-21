import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

const FORM_VALUE = 'form-storage';

let formData = {};

formEl.addEventListener('submit', onSubmitForm);
formEl.addEventListener('change', onInputValue);

getFormDataFromStorage();

function onSubmitForm(e) {
  e.preventDefault();

  startCreatePromises(formData);

  localStorage.removeItem(FORM_VALUE);
  e.target.reset();

  formData = {};
}

function onInputValue(e) {
  formData[e.target.name] = e.target.value.trim();

  const stringifyFormData = JSON.stringify(formData);

  localStorage.setItem(FORM_VALUE, stringifyFormData);
}

function getFormDataFromStorage() {
  const savedMessage = localStorage.getItem(FORM_VALUE);

  if (savedMessage) {
    try {
      formData = JSON.parse(savedMessage);

      Object.entries(formData).forEach(
        ([name, value]) => (formEl.elements[name].value = value)
      );
    } catch (error) {
      console.log(error.message);
    }
  }
}

function startCreatePromises({ delay, step, amount } = {}) {
  let stepTime = Number(delay);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, stepTime)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );

    stepTime += Number(step);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
