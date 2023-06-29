import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: 500px 400px 150px 150px;
  text-align: left;
  align-items: center;
  padding: 5px 10px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.table_border};
  }

  tbody &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.table_background};
  }
`;

export const TableTitleCell = styled.th`
  text-align: center;
`;

export const TableHeader = styled.thead`
  & tr {
    border-bottom: 2px solid ${({ theme }) => theme.colors.table_border};
  }
`;
