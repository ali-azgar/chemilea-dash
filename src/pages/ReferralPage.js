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
import { CardBody, Button } from "reactstrap";

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
  },
}));

const datatableDataBalance = [
  ["Vijay Devarakonda", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["John Walsh", "Lorem Ipsum", "person@email.com", "02/08/2020"],
  ["Bob Herm", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["James Houston", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["Prabhakar Linwood", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["Kaui Ignace", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["Esperanza Susanne", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["Christian Birgitte", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["Meral Elias", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["Deep Pau", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["Sebastiana Hani", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["Marciano Oihana", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["Brigid Ankur", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["Anna Siranush", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["Avram Sylva", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["Serafima Babatunde", "Lorem Ipsum", "person@email.com", "01/08/2020"],
  ["Gaston Festus", "Lorem Ipsum", "person@email.com", "01/08/2020"],
];

const datatableDataUpdated = [
  ["Vijay Devarakonda", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["John Walsh", "Lorem Ipsum", "person@email.com", "02/08/2020", "14/08/2020"],
  ["Bob Herm", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["James Houston", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["Prabhakar Linwood", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["Kaui Ignace", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["Esperanza Susanne", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["Christian Birgitte", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["Meral Elias", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["Deep Pau", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["Sebastiana Hani", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["Marciano Oihana", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["Brigid Ankur", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["Anna Siranush", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["Avram Sylva", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["Serafima Babatunde", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
  ["Gaston Festus", "Lorem Ipsum", "person@email.com", "01/08/2020", "14/08/2020"],
];


const ReferralPage = () => {
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
              label="New / Balance Referrals (122)"
              href="/drafts"
              {...a11yProps(0)}
            />
            <LinkTab label="Notified to Referrals (233)" href="/trash" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      </div>
      <div className="container-fluid">
        <TabPanel value={value} index={0}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <MUIDataTable
                data={datatableDataBalance}
                options={options}
                className={`${styles.detailTable}`}
                columns={["From",
                  "Person Name",
                  "Email ID",
                  "Referred on"]}
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
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
                columns={[
                  "From",
                  "Person Name",
                  "Email ID",
                  "Referred on",
                  "Notified on",
                ]}
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </TabPanel>
      </div>
    </CardBody>
  );
};

export default ReferralPage;
