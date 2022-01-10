import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

const App = styled.div`
  padding-bottom: 4rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;

  max-width: 652px;
  margin: 0 auto;
  padding: 6rem 1.25rem 1.25rem;
`;

const H2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4211;
  margin-bottom: 0.5rem;
  opacity: 0.9;
`;

const Code = styled.code`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 0.25em;
  display: inline;
  font-family: 'iA Writer Mono';
  padding: 0.1em 0.4em;
`;

const HrefUnderline = styled.a`
  border-bottom: 1px solid;
  border-bottom-color: inherit;
  padding-bottom: 1px;

  &:hover {
    border-bottom-color: transparent;
  }
`;

export default function AppComponent() {
  return (
    <>
    <App>
      <Header />

      <Main>
        <H2 style={{ fontWeight: 400, flex: 1, letterSpacing: '-.01rem' }}>
          Automata Labs Inc.{' '}
          <span style={{ opacity: 0.5 }}>
            is a DAO research and -deployment company with the goal of realizing the on-chain DAO.
            <br />
            <br />
            Our first software release is the <Code>des-0</Code> contract set.
            <br />
            <HrefUnderline href="https://blog.automata.fi">Read more on the blog page↗</HrefUnderline>.
            <br />
            <br />
            Please stay tuned for more. ☺
            <br />
            — ␕ↂ∴∮⁂♺
          </span>
        </H2>
      </Main>

    </App>
    <Footer />
    </>
  );
}
