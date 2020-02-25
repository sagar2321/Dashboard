import React, {Component} from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import axios from "axios";


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
    var files = event.target.files
    if(this.maxSelectFile(event) && this.checkMimeType(event)){ 
    // if return true allow to setState
       this.setState({
       selectedFile: files
    })
 }
}

  maxSelectFile=(event)=>{
    let files = event.target.files // create file object
        if (files.length > 1) { 
           const msg = 'Only 1 image can be uploaded at a time'
           event.target.value = null // discard selected file
           console.log(msg)
          return false;
 
      }
    return true;
 
 }

 checkMimeType=(event)=>{
  //getting file object
  let files = event.target.files 
  //define message container
  let err = ''
  // list allow mime type
 const types = ['image/png', 'image/jpeg', 'image/gif']
  // loop access array
  for(var x = 0; x<files.length; x++) {
   // compare file type find doesn't matach
       if (types.every(type => files[x].type !== type)) {
       // create error message and assign to container   
       err += files[x].type+' is not a supported format\n';
     }
   };

 if (err !== '') { // if message not same old that mean has error 
      event.target.value = null // discard selected file
      console.log(err)
       return false; 
  }
 return true;

}

onClickHandler = () => {
  const data = new FormData()
  data.append('file', this.state.selectedFile)
  axios.post("http://localhost:8000/upload", data, { 
     // receive two    parameter endpoint url ,form data
 })
 .then(res => { // then print response status
  console.log(res.statusText)
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
            <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>


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