// @refresh reset
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import RootScreens from "./Screens/RootScreens";

function App() {
  return (
    <NavigationContainer>
      <RootScreens />
    </NavigationContainer>
  );
}

export default App;
