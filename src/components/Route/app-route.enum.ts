const AppRoute = {
  ANY: '*',
  ROOT: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  BOOKINGS: '/bookings',
  DETAIL:'/trip/:id'

} as const;

export { AppRoute };