import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import styles from "./common.module.scss";
import {
  CardBody, Button,
  Card,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ".MuiCheckbox-colorPrimary.Mui-checked": {
      color: "#13a4d1 !important",
    },
    ".MuiTableCell-head": {
      fontSize: "15px",
      fontWeight: "600",
      color: "#8296a2",
    },
    ".MuiTableCell-body": {
      fontSize: "14px",
      fontWeight: "500",
      color: "#3d484b",
    },
    ".MuiSvgIcon-root": {
      fill: "#8296a2 !important",
    },
    ".MuiTouchRipple-root:hover": {
      outline: "none !important",
    },
    ".MUIDataTableToolbar-iconActive-23": {
      color: "#fff !important",
      outline: "none !important",
    },
    ".MUIDataTableToolbar-icon-22:focus": {
      outline: "none !important",
    },
    ".MuiInput-underline:after": {
      borderBottom: "2px solid #13a4d1",
    },
    ".MuiIconButton-root": {
      outline: "none !important",
    },
    ".MuiButton-textPrimary": {
      color: "#13a4d1 !important",
    },
    ".MuiButton-textPrimary:focus": {
      outline: "none !important",
    },
    ".MuiFormLabel-root.Mui-focused": {
      color: "#13a4d1 !important",
    },
    ".MuiAppBar-colorPrimary": {
      backgroundColor: "#fff",
      height: "65px",
      color: "#3d484b",
      borderRadius: "4px 4px 0px 0px",
    },
    ".MuiTab-root": {
      padding: "15px !important",
      fontSize: "14px",
      fontWeight: "600",
      textDecoration: "none !important",
    },
    ".MuiTabs-indicator": {
      backgroundColor: "#B8C1C4 !important",
    },
    ".MuiPaper-elevation4": {
      boxShadow: "0 4px 25px 0 rgba(0, 0, 0, 0.1);",
    },
    ".MuiBox-root": {
      padding: "0px !important",
    },
    ".card-body": {
      padding: "15px 0px !important",
    },
    ".MuiTouchRipple-root": {
      color: "#13a4d1 !important",
    },
    ".MuiTab-wrapper": {
      color: "#3d484b !important",
    },
    ".MUIDataTable-responsiveBase-10": {
      margin: "0px 20px 0px 20px !important",
    },
    ".MUIDataTable-responsiveBase-97": {
      margin: "0px 20px 0px 20px !important",
    },
  },
}));

const datatableDataBalance = [
  ["Vijay Devarakonda", "you@email.com", "86-87-19", "01/08/2020"],
  ["John Walsh", "you@email.com", "86-87-19", "02/08/2020"],
  ["Bob Herm", "you@email.com", "86-87-19", "01/08/2020"],
  ["James Houston", "you@email.com", "86-87-19", "01/08/2020"],
  ["Prabhakar Linwood", "you@email.com", "86-87-19", "01/08/2020"],
  ["Kaui Ignace", "you@email.com", "86-87-19", "01/08/2020"],
  ["Esperanza Susanne", "you@email.com", "86-87-19", "01/08/2020"],
  ["Christian Birgitte", "you@email.com", "86-87-19", "01/08/2020"],
  ["Meral Elias", "you@email.com", "86-87-19", "01/08/2020"],
  ["Deep Pau", "you@email.com", "86-87-19", "01/08/2020"],
  ["Sebastiana Hani", "you@email.com", "86-87-19", "01/08/2020"],
  ["Marciano Oihana", "you@email.com", "86-87-19", "01/08/2020"],
  ["Brigid Ankur", "you@email.com", "86-87-19", "01/08/2020"],
  ["Anna Siranush", "you@email.com", "86-87-19", "01/08/2020"],
  ["Avram Sylva", "you@email.com", "86-87-19", "01/08/2020"],
  ["Serafima Babatunde", "you@email.com", "86-87-19", "01/08/2020"],
  ["Gaston Festus", "you@email.com", "86-87-19", "01/08/2020"],
];

const datatableDataUpdated = [
  ["Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "10/08/2020"],
  ["Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "10/08/2020"],
  ["Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "10/08/2020"],
  ["Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "10/08/2020"],
  ["Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "10/08/2020"],
  ["Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "10/08/2020"],
  ["Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "10/08/2020"],
  ["Lorem Ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "10/08/2020"],
];


const NotifyPage = () => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      "aria-controls": `nav-tabpanel-${index}`,
    };
  }

  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const options = {
    textLabels: {
      selectedRows: {
        text: "Request(s) selected",
      },
    },
    selectableRowsOnClick: true,
    customToolbarSelect: (value, tableMeta, onRowsDelete) => {
      return (
        <div>
          <Button
            className={styles.notifyBtn}
            onClick={() => alert("Successfully Notified to User")}
          >
            Notify Now
          </Button>
          <Button className={styles.removeBtn} onClick={() => alert("Successfully Removed")}>
            Remove
          </Button>
        </div>
      );
    },
    rowsPerPageOptions: [10, 20, 30, 40, 50],
    onRowsDelete: (rowsDeleted) => true,
    onRowsSelect: (currentRowsSelected, allRowsSelected) => {
      if (allRowsSelected && allRowsSelected.length > 99)
        console.log("currentRowsSelected :");
      console.log(currentRowsSelected);
      console.log("allRowsSelected :");
      console.log(allRowsSelected);
    },
  };
  const options1 = {
    rowsPerPageOptions: [10, 20, 30, 40, 50],
    rowHover: false,
    selectableRows: false,
  };

  const options2 = {
    rowsPerPageOptions: [10, 20, 30, 40, 50],
    rowHover: false,
    selectableRows: false,
  };

  return (
    <CardBody className={styles.requestTable}>
      <div className="container-fluid">
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab
              label="Send Notifications"
              href="/drafts"
              {...a11yProps(0)}
            />
            <LinkTab label="Sent Notifications" href="/trash" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      </div>
      <div className="container-fluid">
        <TabPanel value={value} index={0}>
          <Card className={styles.notifyCard}>
            <Form className={styles.notifyForm}>
              <FormGroup>
                <Label for="exampleSubject">
                  Subject
                  </Label>
                <Input
                  type="subject"
                  name="subject"
                  placeholder="CAS No. 0-0-0"
                  className={styles.placeHide}
                />
              </FormGroup>
              <FormGroup className={styles.formInput}>
                <Label for="exampleText">
                  Message
                  </Label>
                <Input type="textarea" name="text" placeholder="Type your message here" className={styles.inputHide} />
              </FormGroup>
              <FormGroup>
                <Button className={styles.formBtn} onClick={() => alert("Successfully Sent Notifications")}>Notify now</Button>
              </FormGroup>
            </Form>
          </Card>
        </TabPanel>
      </div>
      <div className="container-fluid">
        <TabPanel value={value} index={1}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <MUIDataTable
                data={datatableDataUpdated}
                options={options1}
                className={`${styles.detailTable}`}
                columns={["Subject", "Message", "Notified on"]}
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </TabPanel>
      </div>
    </CardBody>
  );
};

export default NotifyPage;