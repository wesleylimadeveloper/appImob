import React, { useState } from "react";

import { FilterButton } from "../../components/Buttons/FilterButton";

import { FILTERS } from "../../utils/filters";

import { Container, Filters } from "./styles";

export function Support() {
  const [filterSelected, setFilterSelected] = useState("1");

  return (
    <Container>
      <Filters
        data={FILTERS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FilterButton
            onPress={() => setFilterSelected(item.id)}
            isSelected={item.id === filterSelected}
            {...item}
          />
        )}
      />
    </Container>
  );
}
