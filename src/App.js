import AppRouter from "./router/AppRouter";
import { darktheme, lightTheme } from "./components/globalStyles/theme";
import { ThemeProvider } from "styled-components";
import { useThemeContext } from "./context/ThemeContext";

function App() {
    const { myTheme } = useThemeContext();
    const theme = myTheme === "light" ? lightTheme : darktheme;
    return (
        <ThemeProvider theme={theme}>
            <AppRouter />
        </ThemeProvider>
    );
}

export default App;
