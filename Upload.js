import React, {Component} from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

import './Upload.css';

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

 class Upload extends Component{

  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
   
  }


  onChangeHandler=event=>{

   this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,

})
  }

    render(){
    
    return (
      <div className="Container">
        <div class= 'Row'>
          <div class='offset-md-3 col-md-6'>
            <div class='form-group files'>
              <label>Upload your files</label>
              <input type="file" class="form-control" multiple="" name="file" onChange={this.onChangeHandler}></input>
            </div>
            <button type="button" class="btn btn-success btn-block">Upload</button>


          </div>

        </div>
      
      </div>
    );
        }

}





          {/* <Grid container
  direction="column"
  justify="flex-end"
  alignItems="stretch">

          
        
<Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={handleClick}>
                <Typography color="textSecondary">Material-UI</Typography>
              </Link>
              <Link
                color="inherit"
                href="/getting-started/installation/"
                onClick={handleClick}
              >
                Core
              </Link>
              <Link
                color="textPrimary"
                href="/components/breadcrumbs/"
                onClick={handleClick}
                aria-current="page"
              >
                Breadcrumb
              </Link>
            </Breadcrumbs>
            
          </Grid>
          <Grid item xs={12} sm={6}
          >
            <Typography color="textPrimary"> Span </Typography>
          
          </Grid>
       */}
        
export default Upload;