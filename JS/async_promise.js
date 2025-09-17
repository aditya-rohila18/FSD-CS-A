function register() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('register end');
            resolve();
        }, 8000);
    });
}

function sendEmail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('send email end');
            resolve();
        }, 3000);
    });
}

function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('login end');
            resolve();
        }, 2000);
    });
}

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('get data end');
            resolve();
        }, 1000);
    });
}

function displayData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('display Data end');
            resolve();
        }, 4000);
    });
}

// chaining with Promises
register()
    .then(sendEmail)
    .then(login)
    .then(getData)
    .then(displayData)
    .catch((err) => console.error(err));

console.log('call other application');
