import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { Realm, useApp } from '@realm/react';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

import { Container, Title, Slogan } from './styles';

import bgImg from '../../assets/background.png';

import { Button } from '../../components/Button';
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '@env';

WebBrowser.maybeCompleteAuthSession();

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const app = useApp()

  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ['profile', 'email']
  })

  const handleGoogleSignIn = () => {
    setIsAuthenticating(true)

    googleSignIn().then((response) => {
      if(response.type !== 'success'){
        setIsAuthenticating(false)
      }
    })

    setIsAuthenticating(false)
  }

  useEffect(() => {
    if(response?.type === 'success'){
      if (response.authentication?.idToken){
        const credentials = Realm.Credentials.jwt(response.authentication.idToken)
        app.logIn(credentials).catch((error) => {
          console.log(error)
          Alert.alert('Conta', 'Não foi possível conectar a sua conta Google.')
          setIsAuthenticating(false)
        })
      } else {
        Alert.alert('Conta', 'Não foi possível conectar a sua conta Google.')
        setIsAuthenticating(false)
      }
    }
  }, [response])

  return (
    <Container source={bgImg}>
      <Title>Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button title='Entrar com o Google' isLoading={isAuthenticating} onPress={handleGoogleSignIn} />
    </Container>
  );
}