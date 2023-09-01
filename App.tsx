import { ThemeProvider } from "styled-components";
import { SignIn } from './src/screens/SignIn';
import theme from "./src/theme";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { StatusBar } from "react-native";

import { ANDROID_CLIENT_ID } from "@env";

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  if (!fontsLoaded) {
    return (
      <>
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
        <Loading />
      </>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <SignIn />
    </ThemeProvider>
  );
}