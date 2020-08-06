import Page from "../components/Page";
import {
  chartjs,
} from "../demos/dashboardPage";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Button,
  Card,
  CardHeader,
  Col,
  Row,
} from "reactstrap";
import { getColor } from "../utils/colors";
import styles from "./common.module.scss";
import firstillustration from "../assets/illustrations/users.svg";
import secondillustration from "../assets/illustrations/notify.svg";
import thirdillustration from "../assets/illustrations/request.svg";
import fourthillustration from "../assets/illustrations/refer.svg";

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor("primary");
    const secondaryColor = getColor("secondary");

    return (
      <Page className="DashboardPage">
        <Row className={styles.firstrow}>
          <Col Col xl={4} lg={12} md={12}>
            <Card className={styles.mainCards}>
              <CardHeader className={styles.mainHead}>
                Registered Users{" "}
                <small className={styles.subHead}>Last Six Months</small>
              </CardHeader>
              <Card style={{ border: "none", paddingTop: "1.25rem" }}>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
              </Card>
            </Card>
          </Col>
          <Col Col xl={4} lg={12} md={12}>
            <Card className={styles.mainCards}>
              <CardHeader className={styles.mainHead}>
                Raised Requests
                <small
                  className={styles.subHead}
                  style={{ marginLeft: "10px" }}
                >
                  Last Six Months
                </small>
              </CardHeader>
              <Card style={{ border: "none", paddingTop: "1.25rem" }}>
                <Bar data={chartjs.bar1.data} options={chartjs.bar1.options} />
              </Card>
            </Card>
          </Col>
          <Col Col xl={4} lg={12} md={12}>
            <Card className={styles.mainCards}>
              <CardHeader className={styles.mainHead}>
                Referrals
                <small
                  className={styles.subHead}
                  style={{ marginLeft: "10px" }}
                >
                  Last Six Months
                </small>
              </CardHeader>
              <Card style={{ border: "none", paddingTop: "1.25rem" }}>
                <Bar data={chartjs.bar2.data} options={chartjs.bar2.options} />
              </Card>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col lg={6} md={6} sm={6} xs={12}>
            <Card className={styles.mainCards}>
              <Row className={styles.justify}>
                <div className={styles.textalign}>
                  <h4 className={styles.h4text}>Total Users</h4>
                  <h1 className={styles.h1text}>1,23,201</h1>
                  <Button className={styles.mainBtn}>View all</Button>
                </div>

                <img
                  className={styles.illu}
                  src={firstillustration}
                  width="57%"
                />
              </Row>
            </Card>
          </Col>

          <Col lg={6} md={6} sm={6} xs={12}>
            <Card className={styles.mainCards}>
              <Row className={styles.justify}>
                <div className={styles.textalign}>
                  <h4 className={styles.h4text}>Push</h4>
                  <h1 className={styles.h1text}>Notifications</h1>
                  <Button className={styles.mainBtn}>Notify now</Button>
                </div>

                <img
                  className={styles.illu}
                  src={secondillustration}
                  width="48%"
                />
              </Row>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col lg={6} md={6} sm={6} xs={12}>
            <Card className={styles.mainCards}>
              <Row className={styles.justify}>
                <div className={styles.textalign}>
                  <h4 className={styles.h4text}>Total Requests</h4>
                  <h1 className={styles.h1text}>19,244</h1>
                  <Button className={styles.mainBtn}>View all</Button>
                </div>

                <img
                  className={styles.illu}
                  src={thirdillustration}
                  width="55%"
                />
              </Row>
            </Card>
          </Col>

          <Col lg={6} md={6} sm={6} xs={12}>
            <Card className={styles.mainCards}>
              <Row className={styles.justify}>
                <div className={styles.textalign}>
                  <h4 className={styles.h4text}>Total Referrals</h4>
                  <h1 className={styles.h1text}>9,102</h1>
                  <Button className={styles.mainBtn}>View all</Button>
                </div>

                <img
                  className={styles.illu}
                  src={fourthillustration}
                  width="55%"
                />
              </Row>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
