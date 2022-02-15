import styled from 'styled-components';

import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import DESThumbnail from './constants/images/des-thumbnail.png';
import RecyclerThumbnail from './constants/images/recycler-thumbnail.png';

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

const H3 = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4211;
  opacity: 0.5;
  letter-spacing: 0.03em;
`;

const Divider = styled.div({
  width: '100%',
  height: 1,
  borderBottom: '1px dotted rgba(255, 255, 255, 0.1)',
  margin: '24px 0 32px 0',
});

export default function AppComponent() {
  return (
    <>
    <App>
      <Header />

      <Main>
        <H2 style={{ fontWeight: 400, flex: 1, letterSpacing: '-.01rem' }}>
          Automata Labs Inc.{' '}
          <span style={{ opacity: 0.5 }}>
            is a DAO research and -deployment company.
            The laboratory's goal is to realize the on-chain DAO for cryptocurrencies and Web3.
          </span>
        </H2>

        <Divider />

        <H3>SOFTWARE RELEASES</H3>
        <Card
          href="https://recycler.automata.fi"
          src={RecyclerThumbnail}
          title="(Re)cycler"
          subtitle="for Tokemak"
          description={<>The (Re)cycler compounds TOKE rewards from <br /> the highest yielding reactors and bribes.</>}
        />
        <Card
          href="https://blog.automata.fi/"
          src={DESThumbnail}
          title="DES"
          subtitle="DAO Execution System"
          description="DAO Execution System (DES) introduces a new methodology for creating proposals and tokenizes proposals as ERC-721 tokens."
        />
      </Main>

    </App>
    <Footer />
    </>
  );
}
