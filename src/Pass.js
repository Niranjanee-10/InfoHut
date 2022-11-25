import React from 'react'
export default function Pass() {
    const [meter, setMeter] = React.useState(false);
    const [password, setPassword] = React.useState('');
  
    const passwordRegex =
      /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/g;
    const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
    const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
    const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
    const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
    const eightCharsOrMore = /.{8,}/g; // eight characters or more
  
    const passwordTracker = {
      uppercase: password.match(atLeastOneUppercase),
      lowercase: password.match(atLeastOneLowercase),
      number: password.match(atLeastOneNumeric),
      specialChar: password.match(atLeastOneSpecialChar),
      eightCharsOrGreater: password.match(eightCharsOrMore),
    };
  
    const passwordStrength = Object.values(passwordTracker).filter(
      (value) => value
    ).length;
  
    return (
      <div>
        <h1>Password Strength Meter</h1>
        <p>Focus/Click on the password field to see the meter</p>
        <form>
          <input
            onFocus={() => setMeter(true)}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            value={password}
            name="password"
          />
          {meter && (
            <div>
              <div className="password-strength-meter"></div>
              <div>
                {passwordStrength < 5 && 'Must contain '}
                {!passwordTracker.uppercase && 'uppercase, '}
                {!passwordTracker.lowercase && 'lowercase, '}
                {!passwordTracker.specialChar && 'special character, '}
                {!passwordTracker.number && 'number, '}
                {!passwordTracker.eightCharsOrGreater &&
                  'eight characters or more'}
              </div>
            </div>
          )}
        </form>
        <style jsx>
          {`
            input {
              padding:0.5rem;
              border-radius:.5rem;
              border: 1px solid grey;
              max-width: 50%;
              width:100%
            }
            .password-strength-meter {
              height: 0.3rem;
              background-color: lightgrey;
              border-radius: 3px;
              margin: .5rem 0
            }
  
            .password-strength-meter::before {
              content: "";
              background-color: ${
                ['red', 'orange', '#03a2cc', '#03a2cc', '#0ce052'][
                  passwordStrength - 1
                ] || ''
              };
              height: 100%;
              width: ${(passwordStrength / 5) * 100}%;
              display: block;
              border-radius: 3px;
              transition: width 0.2s;
            }
          `}
        </style>
      </div>
    );
  }