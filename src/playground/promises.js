const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Giannis',
        //     age: 24
        // });
        reject('Something went wrong');
    }, 1500);
});

promise
    .then((data) => {
        console.log('1', data);
    }).then(() => {
        console.log('does this run?');
    }).catch((error) => {
        console.log('error: ', error);
    });

console.log('after');
