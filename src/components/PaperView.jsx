import * as utils from './utils'
import { useState } from 'react';
import { Button, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import styled from '@emotion/styled';

/**
 * React Component - Provides Modal dialog
 * @param {*}
 * @return {*}
 */
export const PaperModal = ({modal, toggle, name, type, description}) => {
    const ModalContainer = styled.div`
      margin: auto;
      display: block;
      max-width: 500px;
      padding: 0.3rem;
    `;
  
    return (
      <ModalContainer>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Paper Details</ModalHeader>
          <ModalBody>
            <p>
                <ul>
                    <li><b>Name:</b> {name}</li>
                    <li><b>Type:</b> {type}</li>
                    <li><b>Description:</b> {description}</li>
                </ul>
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </ModalContainer>
    );
  }

function PaperList({numPapers=5, modal, toggle, selectedItem, selectItem}) {
    let papers = utils.generatePapers(numPapers);

    let papersList = papers.map((paper) => (
        <ListGroupItem style={{
            display: 'block',
            width: '100%',
        }}>
            {paper.name}
            <Button color='danger' onClick={() => {
                selectItem(paper);
                toggle();
            }} style={{
                float: 'right',
            }}>FAIR</Button>
        </ListGroupItem>
    ));
    
    return (
        <>
            <ListGroup>
                {papersList}
            </ListGroup>
            {selectedItem && (
                <PaperModal modal={modal} toggle={toggle} {...selectedItem} />
            )}
        </>
    );
}

function PaperView() {
    const [modal, setModal] = useState(false);  // Modal
    const toggleModal = () => setModal(!modal);  // HOF to Toggle Modal

    const [selectedItem, selectItem] = useState(null);

    return (
        <div className='PaperView'>
            <h3>FAIRness</h3>
            <PaperList numPapers={10} modal={modal} toggle={toggleModal} 
                selectedItem={selectedItem} selectItem={selectItem}/>
        </div>
    )
}

export default PaperView;