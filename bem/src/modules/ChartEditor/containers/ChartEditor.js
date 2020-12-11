import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchVariables } from '../reducers/variables';
import { loadInitialState } from '../reducers/tabs';
import ControlCentrePanel from './ControlCentrePanel';
import VariablesPanel from './VariablesPanel';
import ChartTabsContainer from './ChartTabsContainer';
import AddVariablesModal from './AddVariablesModal';
import { fetchChart } from '../reducers/chart';
import RemoveSimulationModal from './RemoveSimulationModal';
import { clearChartValues } from '../reducers/chartValues';
import { clearPlottedVariables } from '../reducers/plottedVariables';
import { clearSelectedVariables } from '../reducers/variables';

const Container = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

const TabsContainer = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

const ChartEditor = ({ fetchChart, fetchVariables, match, clearChartValues, clearPlottedVariables, clearSelectedVariables }) => {
  useEffect(() => {
    const { simulationId, chartId } = match.params;
    loadInitialState();
    fetchVariables(simulationId);
    fetchChart(chartId);

    return () => {
      clearChartValues();
      clearPlottedVariables();
      clearSelectedVariables();
    }
  }, []);
  return (
    <Container className="chartEdtor-container">
      <AddVariablesModal />
      <RemoveSimulationModal />
      <ControlCentrePanel />
      <TabsContainer>
        <ChartTabsContainer />
      </TabsContainer>
      <VariablesPanel />
    </Container>
  );
}

const mapDispatchToProps = {
  fetchVariables,
  fetchChart,
  loadInitialState,
  clearChartValues,
  clearPlottedVariables,
  clearSelectedVariables
}

export default connect(null, mapDispatchToProps)(ChartEditor);
