import FilterBar from '../components/FilterBar';
import { setFilterKeyword } from "../reducers/simulators";
import {
  setTileSize,
  setLayoutType,
  setTableRowHeight,
} from "reducers/dashboardOptions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  tileSize: state.dashboardOptions.tileSize,
  layoutType: state.dashboardOptions.layoutType,
  rowHeight: state.dashboardOptions.rowHeight,
  filterKeyword: state.simulators.simulators.filterKeyword
});

const mapDispatchToProps = {
  setFilterKeyword,
  setTileSize,
  setLayoutType,
  setRowHeight: setTableRowHeight
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);
