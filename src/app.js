import React, { useState } from 'react';

const App = () => {
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
          <form action="" className="right-panel__form">
            <div className="right-panel__form__section">
              <input
                type="text"
                name="firstname"
                id=""
                className="right-panel__form__section__input error"
                autocomplete="off"
                required
              />
              <label
                for="firstname"
                className="right-panel__form__section__label"
              >
                <span className="right-panel__form__section__label__content">
                  First Name
                </span>
              </label>
              <div className="right-panel__form__section__icon-error">
                <img src="./img/icon-error.svg" alt="" className="icon-error" />
              </div>
            </div>
            <div className="message-error">First Name cannot be empty</div>
            <div className="right-panel__form__section">
              <input
                type="text"
                name="lastname"
                id=""
                className="right-panel__form__section__input error"
                autocomplete="off"
                required
              />
              <label
                for="firstname"
                className="right-panel__form__section__label"
              >
                <span className="right-panel__form__section__label__content">
                  Last Name
                </span>
              </label>
              <div className="right-panel__form__section__icon-error">
                <img src="./img/icon-error.svg" alt="" className="icon-error" />
              </div>
            </div>
            <div className="message-error">Last Name cannot be empty</div>
            <div className="right-panel__form__section">
              <input
                type="text"
                name="email"
                id=""
                className="right-panel__form__section__input error"
                autocomplete="off"
                required
              />
              <label
                for="firstname"
                className="right-panel__form__section__label"
              >
                <span className="right-panel__form__section__label__content">
                  Email Address
                </span>
              </label>
              <div className="right-panel__form__section__icon-error">
                <img src="./img/icon-error.svg" alt="" className="icon-error" />
              </div>
            </div>
            <div className="message-error">Looks like this is not an email</div>
            <div className="right-panel__form__section">
              <input
                type="password"
                name="password"
                id=""
                className="right-panel__form__section__input"
                autocomplete="off"
                required
              />
              <label
                for="firstname"
                className="right-panel__form__section__label"
              >
                <span className="right-panel__form__section__label__content">
                  Password
                </span>
              </label>
              <div className="right-panel__form__section__icon-error">
                <img src="./img/icon-error.svg" alt="" className="icon-error" />
              </div>
            </div>
            <div className="message-error">Password cannot be empty</div>

            <button className="right-panel__form__btn">
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
