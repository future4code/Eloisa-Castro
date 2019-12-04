import React from 'react';
import styled from 'styled-components'

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  background-color: white;
  padding: 5px;
  margin-bottom: 8px;
`

const LabelFiltro = styled.label`
  margin-right: 10px;
`

const InputFiltro = styled.input`
  margin-right: 5px;
`

const EspacoFiltro = styled.span`
  margin-right: 25px;
`

function FiltroDeLista() {
  return (
    <FilterContainer>
        <LabelFiltro>Filtrar: </LabelFiltro>
        <InputFiltro type='radio' name='filtro-tarefas' value='nenhum' />Nenhum<EspacoFiltro/>
        <InputFiltro type='radio' name='filtro-tarefas' value='completas' />Completas<EspacoFiltro/>
        <InputFiltro type='radio' name='filtro-tarefas' value='pendentes' />Pendentes
    </FilterContainer>

  );
}

export default FiltroDeLista;