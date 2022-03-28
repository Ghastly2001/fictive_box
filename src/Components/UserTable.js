import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserList } from "../config/api";
import {
  Container,
  createTheme,
  LinearProgress,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const history = useHistory();
  const fetchUsers = async () => {
    setLoading(true);
    const { data } = await axios.get(UserList());

    setUsers(data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
    type: "dark",
  });

  const useStyles = makeStyles(() => ({
    textField: {
      width: "100%",
      marginBottom: 20,
      fontWeight: 500,
      border: "#fff",
    },
    input: {
      color: "white",
    },
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "#99CD4E !important",
    },
    inputLabel: {
      color: "#fff !important",
    },
    row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      transition: "0.2s",
      "&:hover": {
        backgroundColor: "#99cd4e29",
      },
      fontFamily: "Montserrat",
    },
  }));

  const handleSearch = () => {
    return users.filter(({ first_name }) =>
    first_name.toLowerCase().includes(search)
    );
  };

  const classes = useStyles();
  return (
    <ThemeProvider>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Search fethed users below
        </Typography>
        <TextField
          className={classes.textField}
          label="Search For a User.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%", color: "white" }}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
              input: classes.input,
              label: classes.input,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.inputLabel,
              focused: classes.inputLabel,
            },
          }}
        />

        <TableContainer>
          {loading ? (
            <LinearProgress style={{ background: "gold" }} />
          ) : (
            <Table>
              <TableHead style={{ backgroundColor: "#99CD4E" }}>
                <TableRow>
                  {["Profile", "First Name", "Last Name", "Email"].map(
                    (head) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: 700,
                          fontFamily: "Montserrat",
                        }}
                        key={head}
                      >
                        {head}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
              {handleSearch().map(({id, first_name, last_name, avatar, email}) => {
                    return (
                      <TableRow
                        onClick={() => history.push(`/users/${id}`)}
                        className={classes.row}
                        key={first_name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                      >
                        <img src={avatar} alt={first_name} height="90" style={{ marginBottom: 10, borderRadius: "50%" }} />
                      </TableCell>
                      <TableCell >
                          <h3 style={{ color:"#fff", fontWeight: 400 }}>{first_name}</h3>
                      </TableCell>
                      <TableCell >
                          <h3 style={{ color:"#fff", fontWeight: 400 }}>{last_name}</h3>
                      </TableCell>
                      <TableCell >
                          <h3 style={{ color:"#fff", fontWeight: 400 }}>{email}</h3>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default UserTable;
