import React from "react";
import "./modal.css";


function Modal(props) {

    // Get the modal
const modal = document.getElementById('congratsModal');

// Get the <span> element that closes the modal
//const span = document.getElementsByClassName("close")[0];

const display = {display: `${props.show}`};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
} 

    return (
        <div id="congratsModal" className="modal" style={display}>
            <div className="modal-content">
                <div className="modal-header">
                <h2>Congratulations!</h2>
                    <span className="close" onClick={props.onHide}>&times;</span>
                    
                </div>
                <div className="modal-body">
                    <p>Well done! You clicked all of them!</p>
                    <p>Tom Hanks would be proud.</p>
                    <p>Want to test yourself further?</p>
                    <button className="yes" onClick={props.level2}>Sure</button> &nbsp; <button className="no" onClick={props.onHide}>No, thanks</button> 
                </div>
            </div>
        </div>
    );
}


export default Modal;