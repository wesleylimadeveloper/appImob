import { TouchableOpacityProps } from "react-native";

export type FilterButtonProps = TouchableOpacityProps & {
  id: string;
  color: string;
  description: string;
  isSelected: boolean;
};

export type FilterButtonStyleProps = {
  color: string;
  isSelected: boolean;
};
