import { createContext, useEffect, useState } from "react";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db, auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { async } from "@firebase/util";
const IsblogContext = createContext();
export const IsblogProvider = (props) => {
    const [currentUser, setCurrentUser] = useState([]);
    const [Articles, setArticles] = useState([]);
    const [Users, setUsers] = useState([]);
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
    }, [Users]);
    useEffect(() => {
        const getArticles = async () => {
            const querySnapshot = await getDocs(collection(db, "Articles"));
            // querySnapshot.docs.map(doc=>console.log(doc.data()))
            setArticles([...Articles, ...querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        ...doc.data()
                    }
                }
            })]);
        }
        getArticles();
    }, [Articles]);

    const handleUserAuth = async () => {
        const userData = await signInWithPopup(auth, provider)
        setCurrentUser(userData.user);
        addUserToFireBase(userData.user);
    }
    const handleSignOut = async () => {
        setCurrentUser(null);
    }

    async function addUserToFireBase(user) {
        await setDoc(doc(db, 'Users', user.email), {
            email: user.email,
            name: user.displayName,
            imgUrl: user.photoURL,
            followerCount: "0"
        });
    }

    // useEffect(() => {
    //     if (currentUser) {
    //         const insertUser = async () => {
    //             await setDoc(doc(db, 'Users', currentUser.email), {
    //                 email: currentUser.email,
    //                 name: currentUser.displayName,
    //                 imgUrl: currentUser.photoURL,
    //                 followerCount: 0
    //             })
    //         }

    //         insertUser();
    //     }
    // }, [currentUser]);

    return (
        <IsblogContext.Provider
            value={{
                Users,
                Articles,
                handleUserAuth,
                currentUser,
                handleSignOut
            }}>
            {props.children}
        </IsblogContext.Provider>
    );
}

export default IsblogContext;