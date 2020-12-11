import request from '../../../services/request';
import collaborationApi from "services/collaboration-api"

export const fetchSimulations = (documentId, current_page, perPage, sortDirection, keyword) => {
  let options = {
    order_by: `updated_at:${sortDirection}`,
    page: current_page,
    per_page: perPage
  };

  if (keyword) {
    options = {
      ...options,
      q: keyword,
    }
  }

  return collaborationApi.getIDFDocumentSimulations(documentId, options);

};

export const createSimulation = (simulation_name, document_id, status) => {
  const bodyData = {
    simulation_name,
    document_id,
    status
  }
  return request.post(
    `/simulations`,
    bodyData,
    { showSpinner: true }
  )
}

export const deleteMultipleSimulations = ids => {
  return request.delete('/simulations/multiple', {
    data: {
      ids
    }
  });
}

export const downloadSimulations = (apiBaseUrl, simulation_id) => {
  return `${apiBaseUrl}/simulations/${simulation_id}/download`;
}

export const updateSimulation = (simulation_id, data) => {
  return request.put(`/simulations/${simulation_id}`, data, { showSpinner: true });
};

export const getLogSimulation = (simulation_id, page, per_page) => {
  return request.get(`/simulations/${simulation_id}/logs?page=${page}&per_page=${per_page}`, { showSpinner: true })
}

export const convertSimToProject = simulation_id => {
  const bodyData = {
    simulation_id
  };

  return request.post(`/simulations/${simulation_id}/convert`,
    bodyData,
    { showSpinner: true }
  )
}

export const duplicateSimulation = simulation_id => {
  return request.post(`/simulations/${simulation_id}/duplicate`)
}

export const fetchSingleSimuation = simulation_id => {
  return request.get(`/simulations/${simulation_id}`,
    { showSpinner: true }
  )
}