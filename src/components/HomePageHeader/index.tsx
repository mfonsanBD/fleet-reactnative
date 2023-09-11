import React from 'react';
import { Container, Greeting, Message, Name } from './styles';
import { TouchableOpacity } from 'react-native';
import theme from '../../theme';
import { Power } from 'phosphor-react-native';
import { Image } from 'expo-image';
import { useUser, useApp } from '@realm/react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function HomePageHeader() {
  const user = useUser()
  const app = useApp()
  const insets = useSafeAreaInsets()

  const paddingTop = insets.top+32

  const handleLogout = () => {
    app.currentUser?.logOut();
  }

  return (
    <Container style={{ paddingTop }}>
      <Image 
        style={{ width: 54, height: 54, borderRadius: 7 }} 
        source={{ uri: user?.profile.pictureUrl }}
        placeholder="L184i9offQof00ayfQay~qj[fQj["
      />

      <Greeting>
        <Message>Olá</Message>
        <Name>{user?.profile.name}</Name>
      </Greeting>

      <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </Container>
  );
}