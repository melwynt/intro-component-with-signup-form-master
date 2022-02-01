import React, { useState } from 'react';
import iconError from './img/icon-error.svg';
import EmailValidator from 'email-validator';

const App = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorFirstname, setErrorFirstname] = useState(false);
  const [errorLastname, setErrorLastname] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const submit = (event) => {
    event.preventDefault();

    firstname === '' ? setErrorFirstname(true) : setErrorFirstname(false);
    lastname === '' ? setErrorLastname(true) : setErrorLastname(false);
    !EmailValidator.validate(email)
      ? setErrorEmail(true)
      : setErrorEmail(false);
    password === '' ? setErrorPassword(true) : setErrorPassword(false);
  };

  return (
    <main>
      <div className="container">
        <div className="left-panel">
          <h1 className="left-panel__title">
            Learn to code by watching others
          </h1>
          <p className="left-panel__description">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="right-panel">
          <div className="right-panel__top-box">
            Try it free 7 days&nbsp;<span>then $20/mo. thereafter</span>
          </div>
          <form className="right-panel__form" onSubmit={submit} noValidate>
            <div className="right-panel__form__section">
              <input
                type="text"
                name="firstname"
                className={`right-panel__form__section__input ${
                  errorFirstname ? 'error' : ''
                }`}
                autoComplete="off"
                required
                onChange={(e) => setFirstname(e.target.value)}
              />
              <label
                htmlFor="firstname"
                className="right-panel__form__section__label"
              >
                <span className="right-panel__form__section__label__content">
                  {errorFirstname ? '' : 'First Name'}
                </span>
              </label>
              {errorFirstname && (
                <div className="right-panel__form__section__icon-error">
                  <img src={iconError} alt="" className="icon-error" />
                </div>
              )}
            </div>
            {errorFirstname && (
              <div className="message-error">First Name cannot be empty</div>
            )}

            <div className="right-panel__form__section">
              <input
                type="text"
                name="lastname"
                className={`right-panel__form__section__input ${
                  errorLastname ? 'error' : ''
                }`}
                autoComplete="off"
                required
                onChange={(e) => setLastname(e.target.value)}
              />
              <label
                htmlFor="lastname"
                className="right-panel__form__section__label"
              >
                <span className="right-panel__form__section__label__content">
                  {errorLastname ? '' : 'Last Name'}
                </span>
              </label>
              {errorLastname && (
                <div className="right-panel__form__section__icon-error">
                  <img src={iconError} alt="" className="icon-error" />
                </div>
              )}
            </div>
            {errorLastname && (
              <div className="message-error">Last Name cannot be empty</div>
            )}

            <div className="right-panel__form__section">
              <input
                type="text"
                name="email"
                className={`right-panel__form__section__input ${
                  errorEmail ? 'error' : ''
                }`}
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="right-panel__form__section__label"
              >
                <span className="right-panel__form__section__label__content">
                  {errorEmail ? '' : 'Email Address'}
                </span>
              </label>
              {errorEmail && (
                <div className="right-panel__form__section__icon-error">
                  <img src={iconError} alt="" className="icon-error" />
                </div>
              )}
            </div>
            {errorEmail && (
              <div className="message-error">
                Looks like this is not an email
              </div>
            )}

            <div className="right-panel__form__section">
              <input
                type="password"
                name="password"
                className={`right-panel__form__section__input ${
                  errorPassword ? 'error' : ''
                }`}
                autoComplete="off"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="password"
                className="right-panel__form__section__label"
              >
                <span className="right-panel__form__section__label__content">
                  {errorPassword ? '' : 'Password'}
                </span>
              </label>
              {errorPassword && (
                <div className="right-panel__form__section__icon-error">
                  <img src={iconError} alt="" className="icon-error" />
                </div>
              )}
            </div>
            {errorPassword && (
              <div className="message-error">Password cannot be empty</div>
            )}

            <button type="submit" className="right-panel__form__btn">
              Claim your free trial
            </button>
            <div className="right-panel__form__terms">
              By clicking the button, you are agreeing to our&nbsp;
              <span>Terms and Services</span>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default App;
