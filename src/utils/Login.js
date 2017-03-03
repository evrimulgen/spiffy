import GoogleSignIn from 'react-native-google-sign-in';

export function googleSignIn() {
  return (
    GoogleSignIn.configure({
      scopes: [
        'openid',
        'email',
        'profile',
        'https://www.googleapis.com/auth/youtube',
      ],
    })
      .then(() => GoogleSignIn.signInPromise())
      .catch(() => googleSignIn())
      .then(user => ({ accessToken: user.accessToken }))
  )
}
