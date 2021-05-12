export const findById = (id, list) => list.find(item => item._id === id);

export const updateItem = (list, updated) => {
  const updatedIndex = list.findIndex(item => item._id === updated._id)
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex+1)
  ]
}

export const removeItem = (list, id) => {
  const removeIndex = list.findIndex(item => item._id === id)
  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex+1)
  ]
}