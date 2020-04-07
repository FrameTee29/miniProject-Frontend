import firebase from 'firebase';
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google , Facebook , Etc as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => false
    }
  };

export default uiConfig;