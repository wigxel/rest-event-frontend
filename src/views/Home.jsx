import React from 'react';
import Footer from '../components/Footer';

import { SearchComponent } from '../components/forms';
import { H2, H4 } from '../components/typography/heading';
import { Jumbotron, Container } from '../components/layouts';

const Home = props => {
  return (
    <div>
      <Jumbotron className="flex justify-center flex-col items-center">
        <div className="text-center text-white">
          <H2>Book vendors for your events.</H2>
          <H4>Just pick a category. search something out.</H4>
        </div>
        <SearchComponent
          className="mt-5"
          onSubmit={value => props.history.push('/query/', { value })}
        />
      </Jumbotron>
      <main className="py-5">
        <Container>
          <H2>Pick a vendor</H2>
          <H4>some outstanding vendors</H4>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
