import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FilterBar from './FilterBar';
import SimulatorToolbar from './Toolbar';
import SimulatorList from './LayoutMain';
import DeleteModal from './DeleteModal';
import CreateNewModal from './CreateNewModal';
import SendViewModal from './SendViewModal';
import ViewLogModal from './ViewLogModal';

import { fetchSingleSimulation } from '../../Simulators/reducers/simulators';

const Wrapper = styled.div`
  padding: 50px 100px;
  margin: 0 auto;
  a {
    text-decoration: none;
  }
  .bx--data-table-v2 td:nth-child(2) {
    width: 25%;
  }
  .bx--data-table-v2 td:nth-child(5) {
    width: 18%;
  }
  .bx--data-table-v2 td  a div {
    width: 100%;
  }
`;

const ProjectName = styled.div`
  font-size: 14px;
  line-height: 1.29;
  color: var(--cds-text-02,#525252);
  margin-bottom: 20px;
`;

const Container = ({ fetchSingleSimulation, project, simulation, match }) => {
  const { projectId, documentId, simulatorId } = match.params;

  useEffect(() => {

    console.log("debug: Simulations");

    fetchSingleSimulation(simulatorId)
  }, []);
 
  return (
    <Wrapper>
      {project && (
        <React.Fragment>
          <ProjectName>
            <Link to="/dashboard">{project.project_name}</Link> 
            <Link to={`/dashboard/${projectId}/documents/${documentId}/simulator/`}> / Simulations / </Link>
            {simulation && simulation.simulation_name} / Results
          </ProjectName>
        </React.Fragment> 
      )}
      <FilterBar />
      <SimulatorToolbar />
      <SimulatorList />
      <DeleteModal />
      <CreateNewModal />
      <SendViewModal />
      <ViewLogModal />
    </Wrapper>
  )
}

const mapStateToProps = state => {
  const { 
    project,
    simulation
  } = state;

  return {
    project,
    simulation,
  };
}

const mapDispatchToProps = {
  fetchSingleSimulation,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Container));

