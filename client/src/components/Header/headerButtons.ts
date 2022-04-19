import routes from '../../routes';

export const headerButtons = [
  { label: 'Home', href: routes.root },
  { label: 'Rates', href: routes.rates },
  { label: 'Wallet', href: routes.pulpit },
  { label: 'Exchange', href: routes.exchange },
];

export const loginButtons = {
  SignUp: { label: 'Sing up', href: routes.signUp },
  SignIn: { label: 'Sign in', href: routes.signIn },
  Logout: { label: 'Logout', href: routes.logout },
};
