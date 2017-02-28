import GoogleSignIn from 'react-native-google-sign-in';

export function googleSignIn() {
  return (
    GoogleSignIn.configure({
      scopes: [
        'openid',
        'email',
        'profile',
        'https://www.googleapis.com/auth/youtube', 'https://www.googleapis.com/auth/youtubepartner'],
    })
      .then(() => GoogleSignIn.signInPromise())
  )
}
