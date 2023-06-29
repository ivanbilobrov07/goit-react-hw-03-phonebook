import styled from 'styled-components';
import { TextInput } from 'components/TextInput';

export const FilterFormGroup = styled.label`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const FilterInput = styled(TextInput)`
  width: 300px;
`;
