import NavBar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Todos from "./components/Todos";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";


function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <NavBar/>
                <TodoContextProvider>
                    <Todos />
                </TodoContextProvider>
                <ThemeToggle/>
            </ThemeContextProvider>
        </div>
    )
}

export default App;
