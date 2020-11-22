import React, {} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'


const ButtonLink = styled.button
`
    color: white;
     width: 100px;
     height: 50px;
     border:solid 4px white;
     border-radius: 100px;
     background: rgba(255, 255, 255,0);
     font-size: 15px;
     margin: 20px 20px;
     &:hover {
        border:solid 4px #03dac6;
        cursor: pointer;
        
      }
`

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      
    },
    title: {
      flexGrow: 0.9,
      fontFamily:
          'sans-serif',
          fontSize: 30,
    },
  }));


export default function Heading(){
    const classes = useStyles();

    return(
        <div>
            <AppBar style={{ background: '#121212',border: '1px solid #ffffff'}}>
                <Toolbar >
                    <Typography  className={classes.title}>
                        Kelompok 07
                    </Typography>
                    <ButtonLink>
                            Link 1 
                    </ButtonLink>
                    <ButtonLink >
                            Link 2
                    </ButtonLink>
                </Toolbar>
            </AppBar>
        </div>
       
    )
}

