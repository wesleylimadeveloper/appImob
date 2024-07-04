import React, { useRef, useState } from "react";
import { KeyboardAvoidingView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Toast } from "react-native-toast-notifications";

import Input from "../../components/Input";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { LinkButton } from "../../components/Buttons/LinkButton";

import { useAuth } from "../../hooks/useAuth";

import { FormData } from "./types";
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

  const navigation = useNavigation();
  const THEME = useTheme();

  const { login } = useAuth();

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

    try {
      await login(formData);

      navigation.reset({
        index: 0,
        routes: [{ name: "Dashboard" as never }],
      });
    } catch (error) {
      setIsLoggingIn(false);
      Toast.show(
        "Erro ao tentar fazer login. Por favor, verifique suas credenciais ou conexão e tente novamente.",
        {
          normalColor: THEME.colors.warning,
        }
      );
    }
  }

  return (
    <Scroll>
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
                      keyboardType="email-address"
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
