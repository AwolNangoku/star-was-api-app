import { Title, Wrapper } from "./styled";

type LayoutProps = {
    title?: string, 
    children: React.ReactNode;
  };

export default function Layout({title, children}: LayoutProps) {
  return(
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}