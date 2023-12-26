import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  // signInWithPopup,
  signOut,
  updateProfile,
  // GoogleAuthProvider,
} from "firebase/auth";

import axios from "axios";

import app from "../../firebase/firebase.config";
import { backendURL } from "../../routes/UseGetData";
export const AuthContext = createContext(null);
const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // const loginWithGoogle = () => {
  //   setLoading(true);
  //   return signInWithPopup(auth, googleProvider);
  // };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      axios
        .get(backendURL + "/users/single-user?email=" + currentUser?.email)
        .then((result) => {
          if (result?.data?.data?.email) {
            setUser(result?.data?.data);
            // localStorage.setItem("access_token", result?.data?.token);
          } else {
            setUser(null);
          }

          setLoading(false);
        })
        .catch(() => {
          setUser(null);
          setLoading(false);
        });
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    // loginWithGoogle,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
