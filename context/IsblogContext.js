import { async } from "@firebase/util";
import { createContext, useEffect, useState } from "react";
import { collection, getDoc, setDocs, docs } from "firebase/firestore";
const IsblogContext = createContext();
import { db } from "../firebase";
const IsblogProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDoc(collection(db, "users"));
            querySnapshot.docs.map(doc => console.log(doc))
        }
        getUsers();
    }, []);
    return (
        <IsblogContext.Provider
            value={{ posts, users }}>
            {children}
        </IsblogContext.Provider>
    )
}


export { IsblogContext, IsblogProvider };