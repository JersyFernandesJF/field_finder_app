import React, {
  ReactNode,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";
import { app, auth, ClientID } from "../firebase";
import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signInWithCredential,
  AuthCredential,
  OAuthProvider,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import * as AppleAuthentication from "expo-apple-authentication";
import { AppleAuthenticationCredential } from "expo-apple-authentication";

export interface AuthProviderProps {
  children?: ReactNode;
}

export interface UserContextState {
  isAuthenticated: boolean;
  isLoading: boolean;
  id?: string;
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState
);
export interface AuthContextModel {
  auth: Auth;
  user: User | null;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (
    email: string,
    password: string,
    name: string,
    number: string
  ) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  sigInWithApple: () => Promise<UserCredential>;
  sendPasswordResetEmail?: (email: string) => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel
);

export function useAuth(): AuthContextModel {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  function signUp(
    email: string,
    password: string,
    name: string,
    number: string
  ): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log(userCredential);
        const userId = userCredential.user.uid;
        const dbRef = ref(getDatabase(app), `users/${userId}`);
        set(dbRef, {
          name: name,
          number: number,
        });
        console.log(userCredential);
        return userCredential;
      }
    );
  }
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  function signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(auth, email);
  }
  async function sigInWithApple() {
    const appleCredential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
    });

    // Create a new instance of AuthCredential
    const authCredential: AuthCredential = {
      providerId: "apple.com", // Use empty string ('') as a fallback for null values
      signInMethod: "oauth",
      toJSON: () => ({
        providerId: "apple.com",
        signInMethod: "oauth",
        user: appleCredential.user,
        email: appleCredential.email,
        fullName: appleCredential.fullName,
      }),
    };

    console.log("okkkk");
    console.log(authCredential);
    console.log(auth);

    return signInWithPopup(auth, authCredential);
  }
  useEffect(() => {
    const unsubsrcibe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubsrcibe;
  }, []);

  const values = {
    signUp,
    user,
    signIn,
    resetPassword,
    signInWithGoogle,
    sigInWithApple,
    auth,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext);
};
