import React from "react";
import { Container, Menu, Icon } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";
function Navbar() {
  const router = useRouter();
  // console.log("router", router);
  const isActive = (route) => router.pathname === route;
  // console.log(router.pathname);
  return (
    <>
      <Menu fluid>
        <Container text>
          <Link href="/login">
            <Menu.Item header active={isActive("/login")}>
              <Icon
                size="large"
                color={isActive("/login") ? "teal" : "red"}
                name="sign in"
              />
              Login
            </Menu.Item>
          </Link>
          <Link href="/signup">
            <Menu.Item header active={isActive("/signup")}>
              <Icon
                size="large"
                color={isActive("/signup") ? "teal" : "red"}
                name="signup"
              />
              Sign Up
            </Menu.Item>
          </Link>
        </Container>
      </Menu>
    </>
  );
}

export default Navbar;
