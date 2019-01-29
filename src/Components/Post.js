import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


class Post extends Component {


    confirmarEliminacion = () => {

        const {id} = this.props.info;

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
         }).then((result) => {
            if (result.value) {
                this.props.borrarPost(id)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

    render() { 

        const {id, title} = this.props.info;

        return ( 
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary">Check</Link>
                    <Link to={`/editar/${id}`} className="btn btn-warning">Edit</Link>
                    <button onClick={ this.confirmarEliminacion }type="button" 
                    className="btn btn-danger">Delete</button>
                </td>
                
            </tr>
         );
    }
}
 
export default Post;