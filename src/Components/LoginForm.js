import { Container, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import validation from "./validation";

const LoginForm = ({ submitForm }) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const useStyles = makeStyles(() => ({
    container: {
      minHeight: "89vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    formWrapper: {
      display: "flex",
      flexDirection: "column",
      width: "50vw",
      background: "black",
      height: "60vh",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontWeight: "bold",
      fontFamily: "Montserrat",
      color: "#99CD4E",
      fontSize: "27px",
      marginBottom: 25,
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    name: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 25,
    },
    email: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 25,
    },
    password: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 25,
    },
    submit: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    btn: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 20,
    },
    error: {
      color: "red",
    },
  }));

  const classes = useStyles();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    console.log({
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    setDataIsCorrect(true);
  };


useEffect(() => {
  if(Object.keys(errors).length === 0 && dataIsCorrect){
    submitForm(true);
  }
}, [errors])


  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <div>
          <h2 className={classes.title}>Login Form</h2>
        </div>
        <form className={classes.form}>
          <div className={classes.name}>
            <label className={classes.label}>Full Name</label>
            <input
              className={classes.input}
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && (
              <p className={classes.error}>{errors.fullname}</p>
            )}
          </div>
          <div className={classes.email}>
            <label className={classes.label}>Email</label>
            <input
              className={classes.input}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className={classes.error}>{errors.email}</p>}
          </div>
          <div className={classes.password}>
            <label className={classes.label}>Password</label>
            <input
              className={classes.input}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={classes.error}>{errors.password}</p>
            )}
          </div>
          <div className={classes.btn}>
            <button className={classes.submit} onClick={handleFormSubmit}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
