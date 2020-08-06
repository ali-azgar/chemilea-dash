import React from "react";
import {
  CardBody,
} from "reactstrap";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import styles from "./common.module.scss";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
  },
}));

const datatableData = [
  ["Vijay Devarakonda", "you@email.com", "Business", "01/08/2020", "India"],
  ["John Walsh", "you@email.com", "Business", "01/08/2020", "Germany"],
  ["Bob Herm", "you@email.com", "Academia", "01/08/2020", "UK"],
  ["James Houston", "you@email.com", "Academia", "01/08/2020", "USA"],
  ["Prabhakar Linwood", "you@email.com", "Business", "01/08/2020", "India"],
  ["Kaui Ignace", "you@email.com", "Academia", "01/08/2020", "India"],
  ["Esperanza Susanne", "you@email.com", "Business", "01/08/2020", "India"],
  ["Christian Birgitte", "you@email.com", "Academia", "01/08/2020", "India"],
  ["Meral Elias", "you@email.com", "Business", "01/08/2020", "India"],
  ["Deep Pau", "you@email.com", "Academia", "01/08/2020", "India"],
  ["Sebastiana Hani", "you@email.com", "Academia", "01/08/2020", "India"],
  ["Marciano Oihana", "you@email.com", "Academia", "01/08/2020", "India"],
  ["Brigid Ankur", "you@email.com", "Academia", "01/08/2020", "India"],
  ["Anna Siranush", "you@email.com", "Academia", "01/08/2020", "India"],
  ["Avram Sylva", "you@email.com", "Business", "01/08/2020", "India"],
  ["Serafima Babatunde", "you@email.com", "Academia", "01/08/2020", "India"],
  ["Gaston Festus", "you@email.com", "Academia", "01/08/2020", "India"],
];

const options = {
  textLabels: {
    selectedRows: {
      text: "User(s) selected",
    },
  },
  rowsPerPageOptions: [10, 20, 30, 40, 50],
  selectableRowsOnClick: true,
};

const UserPage = () => {
  const classes = useStyles();
  return (
    <CardBody>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Users Information"
            className={`${styles.userTable}`}
            data={datatableData}
            options={options}
            columns={[
              "Full Name",
              "Email ID",
              "User of",
              "Registered on",
              "Country",
            ]}
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </CardBody>
  );
};

export default UserPage;
