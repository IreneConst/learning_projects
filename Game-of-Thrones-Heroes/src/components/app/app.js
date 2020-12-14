import React from "react";
import { Col, Row, Container, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import { CharacterPage, BooksPage, HousesPage, BooksItem } from "../pages";
import ItemList from "../itemList";
import ItemDetails from "../itemDetails";
import gotService from "../../services/gotService";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";

class App extends React.Component {
  gotService = new gotService();
  state = {
    toggleState: true,
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  toggle = () => {
    this.setState((state) => {
      return { toggleState: !state.toggleState };
    });
  };

  render() {
    const { toggleState, error } = this.state;
    const char = toggleState ? <RandomChar /> : null;

    if (error) {
      return <ErrorMessage />;
    }
    return (
      <Router>
        <div className="app">
          <Container>
            <Header />
          </Container>
          <Container>
            <Row>
              <Col lg={{ size: 5, offset: 0 }}>
                {char}
                <Button onClick={this.toggle} color="secondary">
                  Toggle random character
                </Button>
              </Col>
            </Row>
            <Route path="/characters" component={CharacterPage} />
            <Route path="/houses" component={HousesPage} />
            <Route path="/books" exact component={BooksPage} />
            <Route
              path="/books/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <BooksItem bookId={id} />;
              }}
            />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
