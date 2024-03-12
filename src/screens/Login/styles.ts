import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Scroll = styled.ScrollView``;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
  padding: 0 ${RFValue(40)}px;
`;

export const Logo = styled.Image`
  align-self: center;
  height: ${RFValue(164)}px;
  margin-bottom: 32px;
  margin-top: ${RFValue(64)}px;
  width: 45%;
`;

export const Form = styled.View`
  margin-bottom: 48px;
`;

export const InputWrapper = styled.View`
  margin: 0 0 16px 0;
`;

export const LinkButtonWrapper = styled.View`
  align-self: center;
  margin-top: 16px;
  width: 40%;
`;
