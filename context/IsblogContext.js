import { createContext, useEffect, useState } from "react";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase";

const IsblogContext = createContext();
export const IsblogProvider = (props) => {
    const [Users, setUsers] = useState([]);
    const [Articles, setArticles] = useState([]);
    //Running UseEffect Only Once
    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, "Users"));
            setUsers(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        ...doc.data()
                    }
                }
            }));
        }
        getUsers();
    }, []);
    useEffect(() => {
        const getArticles = async () => {
            const querySnapshot = await getDocs(collection(db, "Articles"));
            // querySnapshot.docs.map(doc=>console.log(doc.data()))
            setArticles([...Articles,...querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        ...doc.data()
                    }
                }
            })]);
        }
        getArticles();
    },[]);
    return (
        <IsblogContext.Provider
            value={{
                Users,
                Articles
            }}>
            {props.children}
        </IsblogContext.Provider>
    );
}

export default IsblogContext;