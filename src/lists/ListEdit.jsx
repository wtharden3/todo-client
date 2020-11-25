import React, { useStae } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody } from "reactstrap";

const ListEdit = (props)
    => {
    const [editlistname, setEditlistName] = useState(props.workoutToUpdate.listname);
    const [editDur, setEditDur] = useStae(props.workoutToUpdate.duration);
    const [edittimedue, setEdittimeDue] = useStae(props.workoutToUpdate.timedue);
    const [editDesc, setEditDesc] = useState(props.workoutToUpdate.description);
    const [editisChec, setEditisChec] = useState(props.workoutToUpdate.isChecked);
    

    const listUpdate = (event, list) => {
        event.preventDefault();
        fetch(`http://localhost3000/list/${props.listToUpdate.id}`, {
            method: "PUT",
            body: JSON.stringify({
              log: {
                listname: editlistName,
                duration: editDur,
                timedue: edittimeDue,
                description: editDesc,
                ischecked: editisChec
                
              },
            }),
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: props.token,
            }),
          })
            .then((res) => {
              props.fetchLists();
        props.updateOff();
            })
        };     

    return ( 
   <Modal isOpen={true}>
            <ModalHeader>Enter a List</ModalHeader>
            <ModalBody>
                <Form onSubmit={checkListUpdate}>
                <FormGroup>
          <Label htmlFor="isChecked">Edit isChecked:</Label> 
          <Input
            name="isChecked"
            value={editisChec}
            onChange={(e) => setEditisChec(e.target.value)}
          />
        </FormGroup>  
                <FormGroup>
          <Label htmlFor="description">Edit Descrition:</Label> 
          <Input
            name="description"
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
         </FormGroup>
                    <FormGroup>
          <Label htmlFor="timedue">Edit timeDue:</Label> 
          <Input
            type="select"
            name="timedue"
            value={edittimeDue}
            onChange={(e) => setEdittimeDue(e.target.value)}>
          </Input>
        </FormGroup>          
        <FormGroup>
          <Label htmlFor="duration">Edit Duration:</Label> 
          <Input
            type="select"
            name="duration"
            value={editDur}
            onChange={(e) => setEditDur(e.target.value)}>
          </Input>
                    </FormGroup>
                    <FormGroup>
          <Label htmlFor="listname">Edit listName:</Label> 
          <Input
            type="select"
            name="listname"
            value={editlistName}
            onChange={(e) => setEditlistName(e.target.value)}>
          </Input>
        </FormGroup>          
        <Button type="submit">Update the list!</Button>
      </Form>
 </ModalBody>
   </Modal>
  );
};   
           
export default ListEdit;