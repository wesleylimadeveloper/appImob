import React from "react";

import { FilterButtonProps } from "./types";
import { Container, Text } from "./styles";

export function FilterButton({
  color,
  description,
  isSelected,
  ...rest
}: FilterButtonProps) {
  return (
    <Container
      activeOpacity={0.7}
      color={color}
      isSelected={isSelected}
      {...rest}
    >
      <Text color={color} isSelected={isSelected}>
        {description}
      </Text>
    </Container>
  );
}
