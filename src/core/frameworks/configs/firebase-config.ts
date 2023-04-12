import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {firebaseConfig} from '../../services/FirebaseService';

const appFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase);
export default appFirebase;
