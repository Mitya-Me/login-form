import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/globalStyle";
import { Header } from "./components/";
import { AuthContext } from "./context";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/";
import { Container } from "./components/";

function App() {
  const [auth, setAuth] = useState(false);
  
  useEffect(() => { 
    if (localStorage.getItem('auth')) setAuth(true)
  }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <BrowserRouter>
                <GlobalStyle />
                <Container>
                    <Header />
                    <AppRouter />
                </Container>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
