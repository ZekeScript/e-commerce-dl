import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAhefEv6ffXJgeVtXjnLIqme3OTJNpHd3M',
	authDomain: 'backendecommerce-a5b70.firebaseapp.com',
	projectId: 'backendecommerce-a5b70',
	storageBucket: 'backendecommerce-a5b70.appspot.com',
	messagingSenderId: '452196299002',
	appId: '1:452196299002:web:8f2823f82b43c7512cd943',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
