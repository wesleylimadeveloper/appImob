import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  text-align: center;
`;
