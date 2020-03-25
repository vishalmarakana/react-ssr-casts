import { createSelector } from 'reselect'

const selectState = (state) => state

export const selectUsers = createSelector(
  [selectState],
  (state) => state.users
)
