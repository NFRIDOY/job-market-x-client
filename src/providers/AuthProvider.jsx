import { createContext, useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    

    const createUserEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("Sign-out successful.")
        }).catch((error) => {
            // An error happened.
            alert("Sign-out Failes. Error")
            console.log(error)
        });

    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            // if (currentUser) {
            //     // User is signed in, see docs for a list of available properties
            //     // https://firebase.google.com/docs/reference/js/auth.user
            //     const uid = currentUser.uid;
            //     // ...
            //     console.log(user)
            // } else {
            //     // User is signed out
            //     // ...
            // }
        })

        return () => {
            unSubscribe()
        }
    }, [user])

    //Update Ueser
    const updateUser = (name, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName : name,
            photoURL : photoURL,
            // emailVerified : user.emailVerified
        }).then(() => {
            // Profile updated!
            // ...
            alert("Profile updated!")
            alert(user.displayName)
            alert(user.photoURL)
            
            
        }).catch((error) => {
            // An error occurred
            // ...
            alert("Profile updated! Failed")
            console.log(error)
        });
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;

            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            const uid = user.uid;
        }
    }


    const contextInfo = { user, setUser, loading, setLoading, createUserEmailPass, updateUser, signInEmailPass, googleSignIn, logOut }

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    )
}
