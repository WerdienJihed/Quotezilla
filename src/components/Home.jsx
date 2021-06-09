import { useState, useEffect } from "react";
import axios from "axios";
import ApiList from "./ApiList";
import Quotecard from "./Quotecard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomModal from "./CustomModal";
import "./../styles/home.css";

function Home() {
  const [data, setData] = useState({ quote: "", source: "" });
  const [loading, setLoading] = useState(false);
  const [activeApi, setActiveApi] = useState("famousQuotesApi");
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setLoading(true);

    const FetchDataMoviesQuotesApi = async () => {
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
          setLoading(false);
        });
    };

    const FetchDataFamousQuotesApi = async () => {
      const options = {
        method: "GET",
        url: "https://quotes15.p.rapidapi.com/quotes/random/",
        params: { language_code: "en" },
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
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
          setLoading(false);
        });
    };

    const FetchDataMotivationalQuotesApi = async () => {
      const options = {
        method: "GET",
        url: "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote",
        params: { token: "ipworld.info" },
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
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
          setLoading(false);
        });
    };

    switch (activeApi) {
      case "moviesQuotesApi":
        FetchDataMoviesQuotesApi();
        break;
      case "motivationalQuotesApi":
        FetchDataMotivationalQuotesApi();
        break;
      default:
        FetchDataFamousQuotesApi();
        break;
    }
  }, [counter, activeApi]);

  const handleGenerate = () => {
    activeApi === "motivationalQuotesApi"
      ? setShow(true)
      : setCounter((prev) => prev + 1);
  };

  const handleSelect = (activeKey) => {
    setActiveApi(activeKey);
  };
  return (
    <div className="home">
      <Container fluid>
        <Row xs={12} md={4}>
          <Col>
            <ApiList handleSelect={handleSelect} />
          </Col>
          <Col xs={12} md={8}>
            <Quotecard
              quote={data.quote}
              source={data.source}
              handleGenerate={handleGenerate}
              isLoading={loading}
            />
          </Col>
        </Row>
      </Container>
      <CustomModal show={show} handleClose={handleClose} />
    </div>
  );
}

export default Home;
