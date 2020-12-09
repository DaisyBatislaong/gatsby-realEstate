import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { TextField, Container } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: "3rem auto",
    padding: "3rem",
    border: "1px solid black",
    textAlign: "center",

    "& > *": {
      margin: theme.spacing(2),
      width: "35ch",
    },
    "& .message": {
      width: "72ch",
    },
  },
}))

const Contact = () => {
  const classes = useStyles()
  return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="firstName" label="First Name" variant="outlined" />
        <TextField id="secondName" label="Second Name" variant="outlined" />
        <TextField id="email" label="E-mail" variant="outlined" />
        <TextField id="phone" label="Phone Number" variant="outlined" />
        <TextField
          id="message"
          label="Message"
          placeholder="Placeholder"
          multiline
          variant="outlined"
          className="message"
        />
      </form>
  )
}

export default Contact
