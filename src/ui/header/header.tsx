import { useSelector } from "react-redux";
import { Search } from "../search/search";
import {
  StyledHeader,
  HeaderContentWrapper,
  HeaderTitle,
  HeaderUsername,
} from "./styles";
import { RootState } from "../../state/store";

export function Header() {
  const user = useSelector((state: RootState) => state.user.username);

  return (
    <StyledHeader>
      <HeaderContentWrapper>
        <HeaderTitle to={"/"}>Fast react pizza co.</HeaderTitle>
        <Search placeholder={"Search order #"} />
        {user && <HeaderUsername>{user}</HeaderUsername>}
      </HeaderContentWrapper>
    </StyledHeader>
  );
}
