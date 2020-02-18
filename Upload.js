import React, {Component} from 'react';


import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';


 class Upload extends Component{

    render(){

        const navbarItem={
            marginLeft:"40%"
          }
          const icon={
            color:"#ff0000"
          }
          const style = {
            minWidth: 300,
            minHeight:75
         }
         const button2={
          marginTop:"10%"
          
        }
        const notification={
          marginRight:"3%"
        }
        const verticalTab={
      
          marginTop:"10%"
        }
    

    return(
        <div>
            
            <Grid container spacing={1}>
             <Grid item xs={12} sm={3}>
                <div >
                <Fab  style={style} variant="extended" color="primary"  >Scan OCTSS</Fab>
                </div>
                <div style={button2}>
                <Fab style={style} variant="extended" color="primary">OCT Layer Segmentation</Fab>
                </div>
                </Grid>

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3}>
                        <div>
                            <h1>term</h1>
                        </div>
                    </Grid>
                </Grid>
</Grid>
        </div>
    );
        }

}

export default Upload;