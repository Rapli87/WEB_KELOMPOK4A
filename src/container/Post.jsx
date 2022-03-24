import React from "react";

function Post(props) {
    return (
        <div className="card col-md-4 mb-3 me-3">
            <img src={props.gambar} className="card-img-top" width={100} height={150} alt="Gambarnya"></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Destinasi: {props.destinasi}</h6>
                <p className="card-text">Rp. {props.harga}</p>
                <button className="btn btn-danger" onClick={
                    () => {
                        props.delete(props.id)
                    }
                }>Delete</button>
            </div>
        </div>
    );
}

export default Post;