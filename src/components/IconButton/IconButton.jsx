import { ButtonWrapper } from './IconButton.styled';

export const IconButton = ({ children, ...otherProps }) => {
  return <ButtonWrapper {...otherProps}>{children}</ButtonWrapper>;
};
