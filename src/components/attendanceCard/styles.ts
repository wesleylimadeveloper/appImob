import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  border-width: 0.5px;
  border-radius: 12px;
  padding: 12px;
`;

export const Header = styled.View`
  margin-bottom: 6px;
`;

export const ID = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
  margin-bottom: 8px;
`;

export const Temperature = styled.View`
  flex-direction: row;
  gap: 6px;
`;

export const Contact = styled.View``;

export const ContactInfo = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 2px 0;
`;

export const CallButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;

export const CallButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
`;

export const DateInfo = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 6px;
  justify-content: center;
  margin: 6px 0;
`;

export const SaleInfo = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  text-align: center;
`;

export const SaleValue = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  text-align: center;
`;

export const Involved = styled.View`
  border-bottom-width: 0.5px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: flex-end;
  margin-top: 6px;
  padding: 8px;
`;

export const InvolvedInitialLetterContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 512px;
  height: ${RFValue(36)}px;
  justify-content: center;
  width: ${RFValue(36)}px;
`;

export const InvolvedAvatar = styled.Image`
  border-radius: 512px;
  height: ${RFValue(36)}px;
  width: ${RFValue(36)}px;
`;

export const InvolvedInitialLetter = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
`;

export const ContactMessage = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${({ theme }) => theme.fontSize.normal}px;
  margin-top: 6px;
  text-align: center;
`;

export const ContactMessageUnderline = styled.View`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.danger};
  border-radius: 64px;
  height: ${RFValue(8)}px;
  width: 80%;
`;

export const DescriptionHistory = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSize.larger}px;
  margin-top: 8px;
`;

export const Footer = styled.View`
  align-items: flex-end;
  margin-top: 6px;
`;
