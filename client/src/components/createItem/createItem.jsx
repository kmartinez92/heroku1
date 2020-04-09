import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

const CreateItem = (props) => {

    return (
      <Form>
        <FormGroup>    
          <Label for="exampleEmail">Item Name</Label>
          <Input type="text" name="itemName" placeholder="Enter Item Name" 
          onChange={props.handleChange} 
          value={props.value.itemName}/>      
        </FormGroup>

        <FormGroup>    
          <Label for="exampleEmail">Item Quantity</Label>
          <Input type="number" name="itemQuantity" placeholder="Enter Item Quantity" 
          onChange={props.handleChange}
          value={props.value.itemQuantity}/>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Select Item Type</Label>
          <Input type="select" name="itemType" onChange={props.handleChange} value={props.value.itemType}>
           <option></option>
            <option>Fruit</option>
            <option>Sweet</option>
          </Input>
        </FormGroup>

        <FormGroup>    
          <Label for="exampleEmail">Item Image Link</Label>
          <Input type="text" name="itemImage" placeholder="Enter a image link" 
          onChange={props.handleChange}
          value={props.value.itemImage}/>
        </FormGroup>

        <Button color="primary" size="lg" onClick={event =>props.submitClick(event)}>Submit</Button>
      </Form>
    );
}

export default CreateItem;