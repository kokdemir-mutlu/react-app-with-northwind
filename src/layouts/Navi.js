import React from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useState } from "react";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut() {
    setIsAuthenticated(false)
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div style={{marginBottom : '4em'}}>
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary/>
            {isAuthenticated ? <SignedIn signOut={handleSignOut}/> :
              <SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
