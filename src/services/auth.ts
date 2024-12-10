import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
  type User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig';
import type { User } from '../types/user';

export async function register(email: string, password: string, name: string, role: 'driver' | 'walker') {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName: name });
    
    const userData: User = {
      id: user.uid,
      email,
      name,
      role,
      phoneNumber: '',
      profilePicture: '',
      isVerified: false,
      documents: {
        status: 'pending'
      }
    };

    await setDoc(doc(db, 'users', user.uid), userData);
    return userData;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function login(email: string, password: string) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    return userDoc.data() as User;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function signOut() {
  try {
    await firebaseSignOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function updateUserProfile(userId: string, data: Partial<User>) {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, data);
    
    if (auth.currentUser && data.name) {
      await updateProfile(auth.currentUser, { displayName: data.name });
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}