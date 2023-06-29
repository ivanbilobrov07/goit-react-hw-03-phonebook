import { StyledButton } from './TextButton.styled';

export const TextButton = ({ text, ...otherProps }) => {
  return <StyledButton {...otherProps}>{text}</StyledButton>;
};
