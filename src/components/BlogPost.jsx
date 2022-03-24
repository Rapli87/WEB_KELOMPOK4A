import React from "react";
import Post from "../container/Post";

class BlogPost extends React.Component {

    // refresh = ()=>{
    //     window.location.reload();
    //     this.insertBook();
    //     // alert('Berhasil Menyimpan Data');
    // }

    state = {
        list: [],
        InsertBooking: {
            id: '',
            gambar: '',
            title: '',
            destinasi: "",
            harga: 0
        }
    }

    // get all books
    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    list: jsonHasilAmbilDariAPI
                })
            })
    }

    // delete books by id
    deleteBooking = (id) => {
        fetch('http://localhost:3001/posts/' + id, {
            method: 'DELETE'
        })
            .then(json => this.ambilDataDariServerAPI())
    }

    // handle value of field
    handleChangeInsert = (event) => {
        let formInsertBooking = { ...this.state.InsertBooking };
        formInsertBooking['id'] = new Date().getTime();
        formInsertBooking[event.target.name] = event.target.value;
        this.setState({
            InsertBooking: formInsertBooking
        });
    }

    // insert to API
    insertBook = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },



























































body: JSON.stringify(this.state.InsertBooking)
})
.then((Response) => {
    this.ambilDataDariServerAPI();
});
}

componentDidMount() {
this.ambilDataDariServerAPI();
}

render() {
return (
    <div className="container-fluid p-4">
        <div className="row">
            <div className="col-md-4 border p-4 me-4">
                <h3>Form untuk menambahkan tempat</h3>

                <form>
                    {/* title */}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" onChange={this.handleChangeInsert} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="destinasi" className="form-label">Destinasi</label>
                        <input type="text" className="form-control" id="destinasi" name="destinasi" onChange={this.handleChangeInsert} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="harga" className="form-label">Harga</label>
                        <input type="number" className="form-control" id="harga" name="harga" onChange={this.handleChangeInsert} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gambar" className="form-label">Gambar</label>
                        <input type="text" className="form-control" id="gambar" name="gambar" onChange={this.handleChangeInsert} />
                    </div>
                    <div className="col-md">
                        <button className="btn btn-primary center-block" type="submit" onClick={this.insertBook}> Tambahkan</button>
                    </div>
                </form>

            </div>
            <div className="col-md border p-4">
                <h3>List tempat yang bisa di boking:</h3>
                <div className="row">
                    {
                        this.state.list.map(booking => {
                            return <Post key={booking.id} gambar={booking.gambar} title={booking.title} destinasi={booking.destinasi} harga={booking.harga} id={booking.id} delete={this.deleteBooking} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
);
}
}

export default BlogPost;