import { Wrapper, Container } from "./styles";
import type { ContentProps } from "./types";

export const Content = ({ children }: ContentProps) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};
