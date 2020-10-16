import React, {useState} from 'react'
import {Collapse, Button} from 'react-bootstrap'
import EditShoe from './shoes/EditShoe'

const EditButton = (props) => {
    const [open, setOpen] = useState(false);
    console.log(props)
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <EditShoe shoe={props.shoe} brands={props.brands}/>
          </div>
        </Collapse>
      </>
    );
  }
  
  export default EditButton;