import GoogleSignIn from 'react-native-google-sign-in';

export function googleSignIn() {
  return (
    GoogleSignIn.configure({
      scopes: [
        'openid',
        'profile',
      ],
    })
      .then(() => GoogleSignIn.signInPromise())
      .catch(() => googleSignIn())
      .then(user => ({
        accessToken: user.accessToken,
        userID: user.userID,
        name: user.name,
        email: user.email,
      }))
  )
}
