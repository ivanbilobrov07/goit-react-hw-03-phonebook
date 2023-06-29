import {
  SuccessNotification,
  ErrorNotification,
  NeutralNotification,
} from './Notification.styled';

export const Notification = ({ status, children }) => {
  if (status === 'error') {
    return <ErrorNotification>{children}</ErrorNotification>;
  } else if (status === 'success') {
    return <SuccessNotification>{children}</SuccessNotification>;
  } else {
    return <NeutralNotification>{children}</NeutralNotification>;
  }
};
