import React, { useState, useEffect, useContext } from 'react'
import firebase from '../config/firebase';
import { AuthContext } from '../AuthService'


const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')
    const [documentNumber, setDocumentNumber] = useState(null)
    const user = useContext(AuthContext)
    useEffect(() => {
        firebase.firestore().collection('messages').add({
            context: value,
            user: user.displayName
            
        })
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {

                    return doc.data()
                })
                console.log(messages)
                setMessages(messages);
            });
    }, [])


    const handleSubmit = (e) => {
        firebase.firestore().collection('messages').add({
            context: value,
            user: user.displayName
        }).then(function () {
            setValue('');
        }).catch(function (error) {
            setValue('');
            console.error("Error adding document: ", error);
        });
    }
    const handleDelete = (e) => {
            e.preventDefault()
            firebase.firestore().collection("messages").limit(1).get().then(snapshot =>{
            console.log(snapshot.docs[0].id)
            setDocumentNumber(snapshot.docs[0].id) 
        })
        
        firebase.firestore().collection('messages').doc(documentNumber).delete().then(snapshot => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
        
    }


    return (
        <>
            <h1>Room</h1>
            <ul>
                <li>sample user : sample message</li>
                {messages && messages.map(messages =>
                    <li> {messages.context} </li>
                )}
            </ul>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">送信</button>
                <button onClick={handleDelete}>削除</button> {/*onClick={handleDelete}*/}
            </form>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

export default Room