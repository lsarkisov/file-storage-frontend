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
    /*
      id: "17670ded-c3a8-429a-8d42-b23135b6ffd6"
      fileDownloadUri: "http://localhost:8080/download/17670ded-c3a8-429a-8d42-b23135b6ffd6"
      fileName: "19431067_303.jpg"
      fileType: "image/jpeg"
      size: 64733
    */

    this.props.getAllFilesStatrt();
  }

  componentDidUpdate() {
    const { files } = this.props;
    
    if (files && !this.state.files.length) {
      console.log('PROPS', files);
      this.setState({
        files,
      })
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
            {files.map(item => (
              <ListGroupItem key={item.id}>
                {isEditable === item.id ? (
                  <EditField
                    item={item}
                    onChange={e => this.onChange(e, item.id)}
                  />
                ) : (
                  item.fileName
                )}
                <Controlls
                  onEdit={() => this.onEdit(item.id)}
                  onDelete={() => this.onDelete(item.id)}
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
