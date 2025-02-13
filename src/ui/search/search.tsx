import styled from 'styled-components';
import {BaseInput} from '../../config/global-components';

const SearchForm = styled.form``;

const Styledsearch = styled(BaseInput)``;

interface ISearch {
  placeholder: string;
  [key: string]: any;
}

export function Search(props: ISearch) {
  return (
    <SearchForm>
      <Styledsearch {...props} />
    </SearchForm>
  );
}
