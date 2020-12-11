import { connect } from 'react-redux';
import { setProjectId } from '../reducers/projectId';
import { fetchClassList, setActiveClassByClassName } from '../reducers/classList';
import IdfEditor from '../components/IdfEditor';
import { fetchProject } from 'reducers/project';

const mapStateToProps = (state, { match }) => {
  return {
    isShowed: state.classList.isShowed,
    match,
    className: state.classItem && state.classItem.class_name,
    height: state.controlSize.height,
    fontSize: state.controlSize.fontSize,
  };
}

const mapDispatchToProps = {
    setProjectId,
    fetchClassList,
    setActiveClassByClassName,
    fetchProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(IdfEditor);
