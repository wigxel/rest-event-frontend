import firebase from './config'

export const addSubscriber = email =>  {   
    return new Promise((res, rej) => {
        firebase.database().ref('subscribers').push(email, (error) => {
            if (error) rej(error)
            res()
        });
    })
}