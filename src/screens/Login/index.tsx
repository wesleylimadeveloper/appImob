import React, { useRef, useState } from "react";
import { KeyboardAvoidingView, TextInput } from "react-native";
import { useTheme } from "styled-components/native";

import Input from "../../components/Input";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { LinkButton } from "../../components/Buttons/LinkButton";

import { FormData, LoginNavigationProps } from "./types";
import {
  Scroll,
  Container,
  Logo,
  Form,
  InputWrapper,
  LinkButtonWrapper,
} from "./styles";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogginIn, setIsLoggingIn] = useState(false);

  const theme = useTheme();

  const passwordInputRef = useRef<TextInput>();

  async function handleLogin(formData: FormData) {}

  return (
    <Scroll
      contentContainerStyle={{
        minHeight: "100%",
      }}
    >
      <Container>
        <KeyboardAvoidingView behavior="position">
          <Logo source={require("../../assets/logo.png")} resizeMode="center" />
          <Form>
            <InputWrapper>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isLogginIn}
                onChangeText={setEmail}
                onSubmitEditing={() => passwordInputRef.current.focus()}
                placeholder="E-mail"
                value={email}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isLogginIn}
                onChangeText={setPassword}
                placeholder="Senha"
                secureTextEntry
                ref={passwordInputRef}
                value={password}
              />
            </InputWrapper>
            <PrimaryButton
              title="Entrar"
              disabled={isLogginIn}
              inactive={isLogginIn}
            />

            <LinkButtonWrapper>
              <LinkButton disabled={isLogginIn} title="Esqueci minha senha" />
            </LinkButtonWrapper>
          </Form>
        </KeyboardAvoidingView>
      </Container>
    </Scroll>
  );
}
