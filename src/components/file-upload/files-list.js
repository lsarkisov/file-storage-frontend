import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import FontAwesome from "react-fontawesome";

const Controlls = ({ onEdit, onDelete }) => (
  <span className="files-list--controlls">
    <FontAwesome name="pencil" onClick={onEdit} />
    <FontAwesome name="trash" onClick={onDelete} />
  </span>
);

const EditField = ({ item, onChange }) => (
  <input type="text" placeholder={item.fileName} onChange={onChange} />
);

class FilesList extends Component {
  state = {
    files: [],
    isEditable: null,
    isLoading: false,
  };

  componentDidMount() {
    this.props.getAllFilesStatrt();
  }

  componentDidUpdate() {
    const { files, isLoading } = this.props;
    
    if (files && files.length !== this.state.files.length) {
      this.setState({
        files,
      })
    }

    if (this.state.isLoading !== isLoading) {
      this.setState({ isLoading });
    }
  }

  onEdit = id => {
    const { isEditable } = this.state;
    this.setState({
      isEditable: isEditable === id ? null : id,
      isLoading: isEditable === id
    });
  };

  onDelete = id => {
    this.setState(state => {
      let foundItem = null;

      state.files.forEach((item, index) => {
        if (item.id === id) {
          foundItem = index;
        }
      });

      if (foundItem !== null) {
        state.files.splice(foundItem, 1);
      }
      return state;
    });
  };

  onChange = (e, id) => {
    const { value } = e.target;

    this.setState(state => {
      state.files.map(item => {
        if (item.id === id) {
          item.fileName = value;
        }
        return item;
      });
    });
  };

  render() {
    const { files, isEditable, isLoading } = this.state;
    return (
      <div className="files-list">
        {isLoading && <FontAwesome name="spinner" className="spinner" />}
        {files.length > 0 && (
          <ListGroup>
            {files.map(file => (
              <ListGroupItem key={file.id}>
                <p><strong>Name: </strong> {isEditable === file.id ? (
                  <EditField
                    item={file}
                    onChange={e => this.onChange(e, file.id)}
                  />
                ) : (
                  file.fileName
                )}</p>
                <p><strong>Path: </strong> {file.fileDownloadUri}</p>
                <p><strong>Type: </strong> {file.fileType}</p>
                <p><strong>Size: </strong> {file.size}</p>
                <Controlls
                  onEdit={() => this.onEdit(file.id)}
                  onDelete={() => this.onDelete(file.id)}
                />
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </div>
    );
  }
}

export default FilesList;
