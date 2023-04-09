const firebaseConfig = {
    apiKey: "AIzaSyD3MACQi7MJ1-ZJoE8UFLCHLBGqOUp0XlA",
    authDomain: "app20221218.firebaseapp.com",
    databaseURL: "https://app20221218-default-rtdb.firebaseio.com",
    projectId: "app20221218",
    storageBucket: "app20221218.appspot.com",
    messagingSenderId: "983313870450",
    appId: "1:983313870450:web:c5949fbe83941dce26dceb",
    measurementId: "G-GDJS584TKG"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

//; (async () => {
//    let result = await write('BBB', 'test')
//    console.log(result)
//
//    let response = await read('test')
//    console.log(response)

//    listen('test', (value) => {
//        console.log(value)
//    })
//})()
