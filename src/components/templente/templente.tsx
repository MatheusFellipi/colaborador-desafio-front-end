import { ReactNode } from "react";
import { Header } from "./styles";

type TempleteType = {
  children: ReactNode;
};

export function Templete({ children }: TempleteType) {
  return (
    <div>
      <Header>oi</Header>
      <aside>aside</aside>
      {children}
    </div>
  );
}
