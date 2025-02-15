import { Column } from "../column/column";

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <Column styles={{ height: "100vh", overflow: "auto" }}>{children}</Column>
  );
}
