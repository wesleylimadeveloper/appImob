import { FlatList } from "react-native";
import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { ListInfoProps, ListTitleProps } from "./types";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
`;

export const Filters = styled.FlatList.attrs({
  contentContainerStyle: {
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  max-height: ${RFPercentage(10)}px;
  min-height: ${RFPercentage(10)}px;
` as typeof FlatList;

export const ListInfo = styled.View<ListInfoProps>`
  border-bottom-width: 0;
  border-color: ${({ color }) => color};
  border-radius: 8px;
  border-top-width: 8px;
  border-width: 2px;
  margin: 8px 16px;
  padding: 8px 16px;
`;

export const ListTitle = styled.Text<ListTitleProps>`
  border-bottom-width: 1px;
  border-color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
  margin-bottom: 6px;
`;

export const SaleInfo = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  text-align: right;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
})`` as typeof FlatList;

export const Divider = styled.View`
  margin-top: 16px;
`;

export const ListEmptyMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  margin-top: 64px;
  text-align: center;
`;
