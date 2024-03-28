import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(16)}px;
`;

export const Avatar = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 256px;
  height: ${RFValue(54)}px;
  justify-content: center;
  width: ${RFValue(54)}px;
`;

export const InitialLetter = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
`;

export const Greetings = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSize.largest}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
`;
