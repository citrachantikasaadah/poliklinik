import React, { Component } from 'react'
import "bootstrap/js/src/modal"

export default class Modal extends Component {
    render() {
        let modelStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',
            // marginTop: '130px',
        }
        return (
            <div className="modal show fade" style={modelStyle}>
                <div className="modal-dialog">
                    <div className="modal-content" style={{marginTop: "160px"}}>
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                            <button type="button" className="btn-close" onClick={this.props.hide}></button>
                        </div>
                        <div className="modal-body">
                            <img src={this.props.url} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
