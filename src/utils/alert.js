import { writable } from 'svelte/store';

export const alertMsg = writable('');
export const successAlert = writable(false);
export const warningAlert = writable(false);

let timeoutId;

function resetTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const variable = [warningAlert, successAlert]
      variable.forEach((index) => index.set(false));
    }, 3000);
  }
  
//Sign Up
export function signupSuccessAlert() {
  successAlert.set(true);
  alertMsg.set('Sign up successful')
  resetTimeout()
}

export function signupFailAlert() {
  warningAlert.set(true);
  alertMsg.set('Sign up failed')
  resetTimeout()
}

//Log In
export function loginSuccessAlert() {
  successAlert.set(true);
  alertMsg.set('Log in successful')
  resetTimeout()
}

export function loginFailAlert() {
  warningAlert.set(true);
  alertMsg.set('Log in failed')
  resetTimeout()
}

//Create job
export function jobCreationSuccessAlert() {
  successAlert.set(true);
  alertMsg.set('Job successfully created')
  resetTimeout()
}

export function jobCreationFailAlert() {
  warningAlert.set(true);
  alertMsg.set('Job failed to be created')
  resetTimeout()
}