import React, { useRef, useState } from "react";
import { KeyboardAvoidingView, TextInput } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  const [isLogginIn, setIsLoggingIn] = useState(false);

  const passwordInputRef = useRef<TextInput>();

  const schema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .required("E-mail obrigatório.")
      .email("E-mail inválido."),
    password: yup.string().trim().required("Senha obrigatória."),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleLogin(formData: FormData) {
    setIsLoggingIn(true);

    setTimeout(() => {
      setIsLoggingIn(false);
    }, 2000);
  }

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
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Input
                      autoCapitalize="none"
                      autoCorrect={false}
                      editable={!isLogginIn}
                      error={errors?.email?.message}
                      onChangeText={onChange}
                      onSubmitEditing={() => passwordInputRef.current.focus()}
                      placeholder="E-mail"
                      value={value}
                    />
                  </>
                )}
              />
            </InputWrapper>
            <InputWrapper>
              <Controller
                name="password"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Input
                      autoCapitalize="none"
                      autoCorrect={false}
                      editable={!isLogginIn}
                      error={errors?.password?.message}
                      onChangeText={onChange}
                      onSubmitEditing={handleSubmit(handleLogin)}
                      placeholder="Senha"
                      secureTextEntry
                      ref={passwordInputRef}
                      value={value}
                    />
                  </>
                )}
              />
            </InputWrapper>
            <PrimaryButton
              title="Entrar"
              disabled={isLogginIn}
              inactive={isLogginIn}
              onPress={handleSubmit(handleLogin)}
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
