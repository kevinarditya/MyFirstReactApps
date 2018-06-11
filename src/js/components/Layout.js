import React from "react";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <button id="myButton" className="btn btn-success" data-toggle="modal" data-target="#exampleModal" >Click Me!</button>

        <div className="modal fade" ref={modal=> this.modal = modal} id="exampleModal" tabIndex="-1" role="dialog" aria- labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Hello World
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
