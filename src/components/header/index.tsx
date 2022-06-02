import styled from "@emotion/styled";
import Image from "next/image";
import { Users } from "../user";

export function Header() {
  return (
    <Header_cotainer>
      <div className="mobile">
        <Users
          name="Luiz Zlochevsky"
          height="40px"
          width="40px"
          image=""
        ></Users>
      </div>

      <div className="mobile logo">
        <Image src={"/logo.svg"} alt="avatar" height="40px" width="40px" />
      </div>

      <div className="desktop">
        <Image src={"/logo.svg"} alt="avatar" height="40px" width="40px" />
      </div>
      <div className="desktop">
        <Users
          name="Luiz Zlochevsky"
          height="40px"
          width="40px"
          image=""
        ></Users>
      </div>
    </Header_cotainer>
  );
}

const Header_cotainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 13.5px;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  background: ${(props) => props.theme.colors.white};
  height: 3.813rem;
  width: 100%;
  z-index: 200;

  @media (max-width: 520px) {
    .desktop {
      display: none;
    }
    justify-content: flex-start;
    .logo {
      margin-left: 111px;
    }
  }

  @media (min-width: 520px) {
    .mobile {
      display: none;
    }
  }
`;
