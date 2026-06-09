function createLoginTracker(userInfo) {

    // attemptCount tracks how many login attempts have been made
    let attemptCount = 0;

    // loginAttempt is the inner arrow function that handles each login attempt
    const loginAttempt = (passwordAttempt) => {

        // increment attemptCount by 1 every time a login is attempted
        attemptCount++;

        // logs the current attempt number and entered password
        console.log(`Attempt #${attemptCount} | Password entered: ${passwordAttempt}`);

        // if attemptCount goes beyond 3 and password is wrong, lock the account
        if (attemptCount > 3 && passwordAttempt !== userInfo.password) {
            return "Account locked due to too many failed login attempts";
        }

        // if the entered password matches the stored password, login is successful
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            // return the exact format the tests expect
            return `Attempt ${attemptCount}: Login failed`;
        }
    };

    // return the inner function so it can be called outside of createLoginTracker
    return loginAttempt;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};