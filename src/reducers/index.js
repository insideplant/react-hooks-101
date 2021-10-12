import React from "react";

const events = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const event = {titele: action.title, body: action.body}
      const length = state.length
      const id = length === 0 ? 1 : state[length -1].id +1
      return [...state, { id, ...event}]
      }
      return state
    case 'DELETE_EVENT':
      return state
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
  }
}