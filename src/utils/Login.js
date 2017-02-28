import GoogleSignIn from 'react-native-google-sign-in';

export function googleSignIn() {
  return (
    GoogleSignIn.configure({
      scopes: ['openid', 'email', 'profile'],
    })
      .then(() => GoogleSignIn.signInPromise())
  )
}
