



























































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