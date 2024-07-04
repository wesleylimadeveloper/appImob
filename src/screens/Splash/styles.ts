import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    minHeight: "100%",
  },
})``;

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
