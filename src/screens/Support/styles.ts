import { FlatList } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  flex: 1;
`;

export const Filters = styled.FlatList.attrs({
  contentContainerStyle: {
    gap: 12,
    height: RFValue(64),
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`` as typeof FlatList;
