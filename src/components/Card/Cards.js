// reactstrap components
import { Card, CardBody } from "reactstrap";

function Cards(props) {
  if (props.imgSrc[2] === "pecas") {
    return (
      <Card className="card-lift--hover shadow border-0">
        <CardBody className="py-5">
          <div className="px-4">
            <img
              alt="..."
              className="img-center img-fluid shadow shadow-lg--hover"
              src={require(`assets/img/pecas/peca${props.imgSrc[0]}${props.imgSrc[1]}.png`)}
              style={{ width: "200px" }}
            />
            <img
              alt="..."
              className="img-center img-fluid shadow shadow-lg--hover"
              src={require(`assets/img/qrcodes/pecas/qrcode${props.imgSrc[0]}${props.imgSrc[1]}.png`)}
              style={{ width: "200px" }}
            />
          </div>
        </CardBody>
      </Card>
    );
  }
  if (props.imgSrc[2] === "assemblys") {
    return (
      <Card className="card-lift--hover shadow border-0">
        <CardBody className="py-5">
          <div className="px-4">
            <img
              alt="..."
              className="img-center img-fluid shadow shadow-lg--hover"
              src={require(`assets/img/assemblys/assembly${props.imgSrc[0]}${props.imgSrc[1]}.png`)}
              style={{ width: "200px" }}
            />
            <img
              alt="..."
              className="img-center img-fluid shadow shadow-lg--hover"
              src={require(`assets/img/qrcodes/assemblys/qrcode${props.imgSrc[0]}${props.imgSrc[1]}.png`)}
              style={{ width: "200px" }}
            />
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default Cards;
