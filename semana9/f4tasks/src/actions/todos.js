export const addTarefa = (novaTarefa) => {
  return {
    type: 'ADICIONAR_TAREFA',
    payload: {
      novaTarefa: novaTarefa
    }
  }
}

export const completarTarefa = (idTarefa) => {
  return {
    type: 'COMPLETAR_TAREFA',
    payload: {
      idTarefa: idTarefa
    }
  }
}

export const excluirTarefa = (idTarefa) => {
  return {
    type: 'REMOVER_TAREFA',
    payload: {
      idTarefa: idTarefa
    }
  }
}

export const completarTodasTarefas = () => {
  return {
    type: 'COMPLETAR_TUDO',
    payload: { }
  }
}

export const removerCompletas = () => {
  return {
    type: 'REMOVER_COMPLETAS',
    payload: { }
  }
}

export const filtrarTodasTarefas = () => {
  return {
    type: 'FILTRAR_TODAS',
    payload: { }
  }
}

export const filtrarTarefasPendentes = () => {
  return {
    type: 'FILTRAR_PENDENTES',
    payload: { }
  }
}

export const filtrarTarefasCompletas = () => {
  return {
    type: 'FILTRAR_COMPLETAS',
    payload: { }
  }
}