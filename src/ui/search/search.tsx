import styled from "styled-components";
import { BaseInput } from "../../config/global-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = styled.form``;

const Styledsearch = styled(BaseInput)``;

interface ISearch {
  placeholder: string;
  [key: string]: any;
}

export function Search(props: ISearch) {
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  function searchHandler(e) {
    const searchTerm = e.target.value;
    setSearchParam(searchTerm);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!searchParam) return;
    navigate(`/order/${searchParam}`);
    setSearchParam("");
  }

  return (
    <SearchForm onSubmit={submitHandler}>
      <Styledsearch onChange={searchHandler} value={searchParam} {...props} />
    </SearchForm>
  );
}
