import { makeStyles } from '@mui/styles';
import React, { useContext, useState } from 'react';
import "./smartswitch.css";
import colors from "assets/theme-dark/base/colors";


const SmartSwitch = {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        viewAllBtn: {
            color: theme.secondary,
            backgroundColor: theme.buttonColor,
            "&:hover": {
                color: theme.secondary,
                backgroundColor: theme.primary,
            }
        },
        viewArr: {
            color: theme.buttonColor,
            backgroundColor: theme.secondary,
            width: '20px',
            height: '20px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            "&:hover": {
                color: theme.buttonColor,
                backgroundColor: theme.secondary,
            },
        },
    }
    )
    );



return (
        <SmartSwitch classes={classes} smartSwitch={switch} />

{/* <div class="button center">
  <input id="checkbox" type="checkbox">
  <div class="button-center center">
    <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
  </div>
  </input> */}
],
    ),
};

export default SmartSwtich