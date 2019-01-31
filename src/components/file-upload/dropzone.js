import React from "react";
import Zone from "react-dropzone";
import { Alert } from "reactstrap";

class DropZone extends React.Component {
  onDrop = (acceptedFiles, rejectedFiles) => {
    this.props.uploadFileStart(acceptedFiles);
  };

  render() {
    return (
      <Zone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <Alert
              className="dropzone"
              color={`secondary ${
                isDragActive ? "alert-success" : ""
              }`}
            >
              <div {...getRootProps()} className="dropzone-area">
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop files here...</p>
                ) : (
                  <p>
                    Try dropping some files here, or click to select files to
                    upload.
                  </p>
                )}
              </div>
            </Alert>
          );
        }}
      </Zone>
    );
  }
}

export default DropZone;
