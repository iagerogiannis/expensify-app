import { initializeApp } from "firebase/app";
import * as firebaseDatabase from "firebase/database";
import moment from 'moment';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_ID
};

initializeApp(firebaseConfig);

const database = firebaseDatabase.getDatabase();

export { database as default };

// firebaseDatabase.set(firebaseDatabase.ref(database), {
//     name: 'Giannis Gerogiannis',
//     age: 23,
//     location: {
//         country: 'Greece',
//         city: 'Athens'
//     }
// }).then(() => {
//     console.log('Set call worked!');
// }).catch((e) => {
//     console.log('Set call removed.', e);
// });

// firebaseDatabase.set(firebaseDatabase.ref(database, 'notes/-MnjfDjmfSh193USA0-E/title'), 'SuperMarket Note');

// firebaseDatabase.set(firebaseDatabase.ref(database, 'attributes'), {
//     height: 1.78,
//     weight: 69.1
// }).then(() => {
//     console.log('Second set call worked');
// }).catch((e) => {
//     console.log('Second set call failed.', e);
// })

// firebaseDatabase.remove(firebaseDatabase.ref(database, 'attributes')).then(() => {
//     console.log('Remove call worked!');
// }).catch((e) => {
//     console.log('Remove call failed.', e);
// })

// firebaseDatabase.update(firebaseDatabase.ref(database, 'location'), {
//     country: 'England'
// }).then(() => {
//     console.log('Update call worked!');
// }).catch((e) => {
//     console.log('Update call failed.', e);
// })

// firebaseDatabase.get(firebaseDatabase.ref(database)).then((snapshot) => {
//     if (snapshot.exists()) {
//         const data = snapshot.val();
//         console.log(`${data.name} lives in ${data.location.city}!`)
//     } else {
//         console.log("No data available");
//     }
// }).catch((error) => {
//     console.error(error);
// });

// firebaseDatabase.onValue(firebaseDatabase.ref(database), (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} lives in ${data.location.city}!`)
// });

// setTimeout(() => {
//     firebaseDatabase.update(firebaseDatabase.ref(database, 'location'), { country: 'Brazil' });
// }, 3000);

// setTimeout(() => {
//     firebaseDatabase.off(firebaseDatabase.ref(database, 'location'));
// }, 3500);

// setTimeout(() => {
//     firebaseDatabase.update(firebaseDatabase.ref(database, 'location'), { country: 'Greece' });
// }, 4000);

// firebaseDatabase.push(firebaseDatabase.ref(database, 'notes'), {
//     title: 'React Note',
//     body: 'This is some example note'
// })

// const expenses = [{
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// }, {
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
// }, {
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'days').valueOf()
// }];

// firebaseDatabase.set(firebaseDatabase.ref(database), null);

// expenses.forEach((expense) => {
//     firebaseDatabase.push(firebaseDatabase.ref(database, 'expenses'), expense);
// });

// const getExpenses = (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((item) => {
//         expenses.push({
//             id: item.key,
//             ...item.val()
//         });
//     });
//     return expenses;
// }

// firebaseDatabase.get(firebaseDatabase.ref(database, 'expenses')).then((snapshot) => {
//     if (snapshot.exists()) {
//         console.log(getExpenses(snapshot));
//     } else {
//         console.log('No data found.');
//     }
// });

// firebaseDatabase.onValue(firebaseDatabase.ref(database, 'expenses'), (snapshot) => {
//     console.log('Value', getExpenses(snapshot));
// });

// firebaseDatabase.push(firebaseDatabase.ref(database, 'expenses'), expenses[0]);

// firebaseDatabase.onChildRemoved(firebaseDatabase.ref(database, 'expenses'), (snapshot) => {
//     console.log('Removed:', snapshot.key, snapshot.val());
// });

// firebaseDatabase.onChildChanged(firebaseDatabase.ref(database, 'expenses'), (snapshot) => {
//     console.log('Changed:', snapshot.key, snapshot.val());
// });

// firebaseDatabase.onChildAdded(firebaseDatabase.ref(database, 'expenses'), (snapshot) => {
//     console.log('Added:', snapshot.key, snapshot.val());
// });

// firebaseDatabase.push(firebaseDatabase.ref(database, 'expenses'), {
//     description: 'Boat',
//     note: '',
//     amount: 320000,
//     createdAt: moment(0).add(60, 'years').valueOf()
// });
