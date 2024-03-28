import styled from "styled-components/native";

import { FilterButtonStyleProps } from "./types";

export const Container = styled.TouchableOpacity<FilterButtonStyleProps>`
  align-items: center;
  background-color: ${({ color, isSelected, theme }) =>
    isSelected ? color : theme.colors.light};
  border-color: ${({ color }) => color};
  border-radius: 8px;
  border-width: 1px;
  justify-content: center;
  padding: 0 36px;
`;

export const Text = styled.Text<FilterButtonStyleProps>`
  color: ${({ color, isSelected, theme }) =>
    isSelected ? theme.colors.light : color};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;
