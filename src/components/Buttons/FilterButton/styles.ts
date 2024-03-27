import styled from "styled-components/native";

import { FilterButtonStyleProps } from "./types";

export const Container = styled.TouchableOpacity<FilterButtonStyleProps>`
  align-items: center;
  background-color: ${({ color, isSelected, theme }) =>
    isSelected ? color : theme.colors.light};
  border-color: ${({ color }) => color};
  border-radius: 8px;
  border-width: 1px;
  height: 100%;
  justify-content: center;
  padding: 12px 24px;
`;

export const Text = styled.Text<FilterButtonStyleProps>`
  color: ${({ color, isSelected, theme }) =>
    isSelected ? theme.colors.light : color};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;
