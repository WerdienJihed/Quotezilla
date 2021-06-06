import { useState, useEffect } from "react";
import axios from "axios";
import Apilistgroup from "./Apilistgroup";
import Quotecard from "./Quotecard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomModal from "./Modal";
import "./../styles/header.css";

function Header() {
  const [data, setData] = useState({ quote: "", source: "" });
  const [loading, setLoading] = useState(false);
  const [activeApi, setActiveApi] = useState("0");
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setLoading(true);

    const FetchDataMovieQuote = async () => {
      const options = {
        method: "GET",
        url: "https://movie-quote-api.herokuapp.com/v1/quote",
      };

      axios
        .request(options)
        .then((response) => {
          setData({
            quote: response.data.quote,
            source: response.data.role,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const FetchDataQuotes15 = async () => {
      const options = {
        method: "GET",
        url: "https://quotes15.p.rapidapi.com/quotes/random/",
        params: { language_code: "en" },
        headers: {
          "x-rapidapi-key":
            "9efb5a67f5msh114ed209b07ac1cp1777eejsn173f1c37d2fd",
          "x-rapidapi-host": "quotes15.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then((response) => {
          setData({
            quote: response.data.content,
            source: response.data.originator.name,
          });
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    const FetchDataInspirational = async () => {
      const options = {
        method: "GET",
        url: "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote",
        params: { token: "ipworld.info" },
        headers: {
          "x-rapidapi-key":
            "9efb5a67f5msh114ed209b07ac1cp1777eejsn173f1c37d2fd",
          "x-rapidapi-host":
            "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then((response) => {
          setData({
            quote: response.data.text,
            source: response.data.author,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    switch (activeApi) {
      case "1":
        FetchDataQuotes15();
        break;
      case "2":
        FetchDataInspirational();
        break;
      default:
        FetchDataMovieQuote();
        break;
    }
  }, [counter, activeApi]);

  const handleClick = () => {
    activeApi === "2" ? setShow(true) : setCounter((prev) => prev + 1);
  };

  const handleSelect = (activeKey) => {
    setActiveApi(activeKey);
  };
  return (
    <div className="header">
      <Container>
        <Row xs={12} md={4}>
          <Col>
            <Apilistgroup handleSelect={handleSelect} />
          </Col>
          <Col xs={12} md={8}>
            <Quotecard
              quote={data.quote}
              source={data.source}
              handleClick={handleClick}
              isLoading={loading}
            />
          </Col>
        </Row>
      </Container>
      <CustomModal show={show} handleClose={handleClose} />
    </div>
  );
}

export default Header;
