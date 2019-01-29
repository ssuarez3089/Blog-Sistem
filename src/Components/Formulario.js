import React, { Component } from 'react';

class Formulario extends Component {

    tituloRef = React.createRef();
    contenidoRef = React.createRef();

    crearPost = (e) => {
        e.preventDefault();

        const post = {
            title: this.tituloRef.current.value,
            body:   this.contenidoRef.current.value,
            userId: 1
        }

        this.props.agregarPost(post)
        
    }

    render() { 
        return ( 
            <form onSubmit={this.crearPost} className="col-8">
                <legend className="text-center">Create new Post</legend>
                <div className="form-group">
                    <label>Post Title:</label>
                    <input type="text" ref={this.tituloRef} className="form-control" placeholder="Post Title" />
                </div>
                <div className="form-group">
                    <label>Content:</label>
                    <textarea className="form-control" ref={this.contenidoRef} placeholder="Content" />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
         );
    }
}
 
export default Formulario;