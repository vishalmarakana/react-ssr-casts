import { createSelector } from 'reselect'

const selectState = (state) => state

export const selectIsAuthenticated = createSelector(
  [selectState],
  (state) => !!state.auth
)
