import React, { useEffect, useState } from "react";
import Horizontal from "./Horizontal";
import "./Permission.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { TextField } from "@material-ui/core";
import { Stack } from "@mui/material";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@mui/material/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { TablePagination } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';


// import TablePagination from '@mui/lab';
import records from "./data.json";


const useStyles = makeStyles({
  evenRow: {
    background: '#E5FFCC', // or any other shade of gray you prefer
  },
  oddRow: {
    background: '#ffffff', // or any other color you prefer for odd rows
  },
});

function Permission() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const styles = {
    width: "175px",
  };

  const head = "Permission and Role Management";

  return (
    <div className="permission">
      <Horizontal head={head} />
      <div className="head_permission">
        <Stack className="search" spacing={2} sx={{ width: 430 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            style={{ height: 20 }}
            disableClearable
            options={records.map((option) => option.name)}
            renderInput={(params) => (
              <TextField
                variant="outlined"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  endAdornment: (
                    <InputAdornment position="end">
                      {" "}
                      <SearchIcon className="search_icon" />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 4,
                    backgroundColor: "#ffffff",
                    border: "1px solid #cccccc",
                    height: "40px !important",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  },
                }}
              />
            )}
          />
        </Stack>
        <Button
          style={styles}
          className="button"
          color="success"
          variant="contained"
        >
          ADD NEW ROLES
        </Button>
      </div>
      <div className="table">
        <TableContainer component={Paper}>
          <Table>
            <TableHead className="thead">
              <TableRow>
                <TableCell className="thead_name">Sr. No.</TableCell>
                <TableCell className="thead_name">Name</TableCell>
                <TableCell className="thead_name">Email</TableCell>
                <TableCell className="thead_name">Role</TableCell>
                <TableCell className="thead_name">Status</TableCell>
                <TableCell className="thead_name">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {records.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow 
                    key={index}
                    className={index % 2 === 0 ? classes.evenRow : classes.oddRow}
                  >
                  <TableCell>{row.sr}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell className="status">{row.status}</TableCell>
                  <TableCell className="three_icons">
                    <CreateOutlinedIcon className="sicon" />
                    <VisibilityOutlinedIcon className="sicon" />
                    <DeleteIcon className="sicon" color="error" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
        rowsPerPageOptions={[5, 7]}
        component="div"
        count={records.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
        </TableContainer>
      </div>
    </div>
  );
}

export default Permission;
