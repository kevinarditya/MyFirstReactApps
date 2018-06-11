import React from "react";


export default class Pricing extends React.Component {
  render() {
    const {harga} = this.props.match.params
    if(harga != null){
        return <h1>Pricing {harga}</h1>
    };

    const panjang = {
      width: '50%'
    }

    return (
      <div>
        <h1>Pricing</h1>       
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={panjang}></div>
        </div>
      </div>
    );
  }
}