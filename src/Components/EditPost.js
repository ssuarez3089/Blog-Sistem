import React, { Component } from 'react';

class Editar extends Component {

    tituloRef = React.createRef();
    contenidoRef = React.createRef();

    editarPost = (e) => {
        e.preventDefault();

        const post = {
            title: this.tituloRef.current.value,
            body:   this.contenidoRef.current.value,
            userId: 1,
            id: this.props.post.id
        }

        this.props.editarPost(post)
        
    }

    cargarFormulario = () => {

        if(!this.props.post) return null;

        const {title, body} = this.props.post;

        return(
                <form onSubmit={this.editarPost} className="col-8">
                    <legend className="text-center">Edit Post</legend>
                    <div className="form-group">
                        <label>Post Title:</label>
                        <input type="text" ref={this.tituloRef} className="form-control" defaultValue={title} />
                    </div>
                    <div className="form-group">
                        <label>Content:</label>
                        <textarea className="form-control" ref={this.contenidoRef}  defaultValue={body}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Save Chagnges</button>
                 </form>
        )
    }


    render() { 

        return ( 
            <React.Fragment>
                {this.cargarFormulario() }
            </React.Fragment>
         );
    }
}
export default Editar;