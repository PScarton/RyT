import React from "react";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { es } from "date-fns/locale";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { cyan } from "@material-ui/core/colors";


const defaultMaterialTheme = createMuiTheme({
    palette: {
      primary: cyan,
    },
  });

const Calendario = (props) => {

  
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
            <ThemeProvider theme={defaultMaterialTheme}>
                <DatePicker
                    autoOk
                    disablePast
                    value={props.fecha}
                    onChange={props.cambiarFecha}
                    open={props.isOpen}
                    onOpen={props.opened}
                    onClose={props.closed}
                />
            </ThemeProvider>
        </MuiPickersUtilsProvider>
    );
  }
  
  export default Calendario;
