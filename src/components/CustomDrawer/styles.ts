import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 4px;
`;

export const Logo = styled.Image`
  align-self: center;
  height: ${RFValue(96)}px;
  margin: ${RFValue(32)}px 0;
  width: 100%;
`;
