import * as Styled from './styles';

export type FormPostProps = {
  title?: string;
};

export const FormPost = ({ title }: FormPostProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
