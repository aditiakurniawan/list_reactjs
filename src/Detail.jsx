import Data from "./data.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [data, setData] = useState();
  let { id } = useParams();

  useEffect(() => {
    const dataAccount = Data[id - 1];
    setData(dataAccount);
  }, []);

  return (
    <>
      <Container className="bg-secondary w-50 py-5 my-5">
        <Row className=" d-flex justify-content-md-center">
          <Col lg="3" className="me-4">
            <img
              src={data?.image}
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "100px",
                margin: "0px",
                objectFit: "cover",
                border: "8px solid red",
              }}
            />
            <h1>{data?.username}</h1>
          </Col>
        </Row>
        <Row className=" d-flex justify-content-center w-50 mx-auto my-5">
          <Col>
            <h2>{data?.follower}</h2>
            <h4>Follower</h4>
          </Col>
          <Col>
            <h2>{data?.following}</h2>
            <h4>Follower</h4>
          </Col>
        </Row>
      </Container>
      <Link
        to={`/`}
        className="text-decoration-none d-flex justify-content-md-center pb-5"
      >
        <button>back</button>
      </Link>
    </>
  );
}

export default Detail;
