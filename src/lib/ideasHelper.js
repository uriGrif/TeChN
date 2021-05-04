export const addIdea = (list, item) => [...list, item];

export const findById = (id, list) => list.find(item => item.id === id);

export const updateIdea = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id)
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex+1)
  ]
}

export const removeIdea = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id)
  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex+1)
  ]
}