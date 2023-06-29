import styled from 'styled-components';

export const NeutralNotification = styled.p`
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const ErrorNotification = styled(NeutralNotification)`
  color: ${({ theme }) => theme.colors.error};
`;

export const SuccessNotification = styled(NeutralNotification)`
  color: ${({ theme }) => theme.colors.success};
`;
