import { createSelector } from 'reselect'

const selectState = (state) => state

export const selectAdmins = createSelector(
  [selectState],
  (state) => state.admins
)
