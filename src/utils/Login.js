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
      //.then(user => { console.log(user); return user })
      .then(user => ({
        accessToken: user.accessToken,
        userID: user.userID,
        name: user.name,
        email: user.email,
      }))
  )
}
