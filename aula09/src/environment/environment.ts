
import { keys } from './environment.keys';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: keys.apiKey,
    authDomain: 'frontend-cinel-tony.firebaseapp.com',
    projectId: 'frontend-cinel-tony',
    storageBucket: 'frontend-cinel-tony.firebasestorage.app',
    messagingSenderId: '308798349718',
    appId: '1:308798349718:web:2dabbbcfc36f75df3bfdb7',
  },
};
