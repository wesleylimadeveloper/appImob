import React, { useEffect, useState } from "react";

import { LoadingContent } from "../../components/LoadingContent";
import { FilterButton } from "../../components/Buttons/FilterButton";
import { AttendanceCard } from "../../components/AttendanceCard";

import { useAuth } from "../../hooks/useAuth";

import {
  getAttendanceQuantity,
  getAttendances,
} from "../../services/atendimento";
import {
  GetAttendanceQuantityResponse,
  GetAttendancesResponse,
} from "../../services/atendimento/types";

import { FILTERS } from "../../utils/filters";

import { filterSelectedTypes } from "./types";
import {
  Container,
  Filters,
  ListInfo,
  ListTitle,
  List,
  Divider,
  ListEmptyMessage,
} from "./styles";

export function Support() {
  const [isLoading, setIsLoading] = useState(true);
  const [filterSelected, setFilterSelected] = useState<filterSelectedTypes>(
    FILTERS[0]
  );
  const [attendanceQuantity, setAttendanceQuantity] = useState(0);
  const [attendances, setAttendances] = useState<GetAttendancesResponse[]>([]);

  const { userData } = useAuth();
  const { Pessoa_Id } = userData;

  function handleSelectFilter(item: filterSelectedTypes) {
    setIsLoading(true);
    setFilterSelected(item);
  }

  async function getAttendancesByPerson() {
    try {
      const response = await getAttendances(Pessoa_Id, filterSelected.id);
      const data: GetAttendancesResponse[] = response.data.data;

      const dataSorteredByID = data
        .sort((a, b) => a.atendimentoId - b.atendimentoId)
        .reverse();

      setAttendances(dataSorteredByID);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  async function getAttendanceQuantityByPerson() {
    setIsLoading(true);

    try {
      const response = await getAttendanceQuantity(
        Pessoa_Id,
        filterSelected.id
      );
      const data: GetAttendanceQuantityResponse = response.data.data;
      const { value: quantity } = data;

      setAttendanceQuantity(quantity);

      if (quantity > 0) {
        await getAttendancesByPerson();
      } else {
        setAttendances([]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAttendanceQuantityByPerson();
  }, [filterSelected]);

  return (
    <Container>
      <Filters
        data={FILTERS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FilterButton
            onPress={() => handleSelectFilter(item)}
            isSelected={item.id === filterSelected.id}
            {...item}
          />
        )}
      />

      {isLoading ? (
        <LoadingContent />
      ) : (
        <>
          <ListInfo color={filterSelected.color}>
            <ListTitle color={filterSelected.color}>
              {filterSelected.description} ({attendanceQuantity} /{" "}
              {attendanceQuantity})
            </ListTitle>
          </ListInfo>

          <List
            data={attendances}
            ItemSeparatorComponent={() => <Divider />}
            keyExtractor={(item) => item.atendimentoId.toString()}
            ListEmptyComponent={() => (
              <ListEmptyMessage>
                No momento, não há registros de atendimentos para esse filtro de
                pesquisa.
              </ListEmptyMessage>
            )}
            renderItem={({ item }) => <AttendanceCard {...item} />}
          />
        </>
      )}
    </Container>
  );
}
