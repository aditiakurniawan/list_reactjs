import data from "./data.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <Container className="w-50">
        {data?.map((item, index) => {
          return (
            <Link to={`/detail/${item.id}`} className="text-decoration-none">
              <Row className=" d-flex bg-dark text-light m-2 p-2 ">
                <Col lg="1" className="me-4">
                  <img
                    src={item.image}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50px",
                      margin: "0px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col lg="5" className="mt-2 ms-5">
                  <h2>{item.username}</h2>
                  <p>{item.follower}</p>
                </Col>
              </Row>
            </Link>
          );
        })}
      </Container>
    </>
  );
}

export default Home;
