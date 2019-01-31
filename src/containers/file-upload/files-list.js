import { connect } from 'react-redux';
import FilesList from '../../components/file-upload/files-list';
import { getAllFilesStatrt, deleteFileStart } from '../../actions/file-upload';

const mapStateToProps = (state, ownProps) => {
  const { files, isLoading } = state.fileUpload;

  return {
    files,
    isLoading,
  ...ownProps,
}};

const mapDispatchToProps = { getAllFilesStatrt, deleteFileStart };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilesList);