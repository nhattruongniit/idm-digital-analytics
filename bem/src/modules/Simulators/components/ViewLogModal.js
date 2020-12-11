import React, { useState } from 'react';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import { Modal } from 'carbon-components-react';
import ChevronDownIcon from '@carbon/icons-react/es/chevron--down/16';

const StyledModal = styled(Modal)`
  .bx--modal-footer {
    display: none;
  }

  .bx--modal-header {
    margin-bottom: 0;
  }
  
  .bx--modal-content {
    margin-bottom: 0;
    overflow-y: hidden;
  }
`;

const StyledTab = styled.div`
  display: flex;
  margin-bottom: 30px;
`

const StyledButton = styled.button`
  border: 0;
  font-size: 22px;
  outline: 0;
  cursor: pointer;
  margin-right: 10px;
  background-color: transparent;
  color: var(--cds-text-02,#525252);
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: ${props => props.active ? '#3D70B2' : '#5A6872'};
  }
`

const StyledContent = styled.div`
  padding: 0 20px;
  max-height: 430px;
  overflow-y: ${props => props.hasScroll ? "scroll" : "hidden"};
`
const StyledList = styled.div`
  font-size: 12px;
  color: var(--cds-text-02,#525252);
  & + & {
    margin-top: 10px;
  }

`
const StyledIndex = styled.div`
  display: inline-block;
  vertical-align: top;
  min-width: 50px;
  padding-right: 20px;
  text-align: right;
`
const StyledMessage = styled.div`
  display: inline-block;
  vertical-align: top;
`

const StyledMore = styled.div`
  color: #3D70B2;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 20px 0;
  font-weight: bold;
  cursor: pointer;
  color; #
`

const ViewLogModal = ({ isShowing, simulationId, cancelFn, viewLogFn, logsErr, currentPage, perPage, totalCount, sizeModal }) => {
  const [type, setType] = useState('err');


  const handleLoadMore = () => {
    if(logsErr.length <= totalCount) {
      viewLogFn(simulationId, currentPage + 1, perPage, true);
    }
  }

  return (
    <Portal>
      <StyledModal
        open={isShowing}
        onRequestClose={cancelFn}
        size={sizeModal}
      >
        <StyledTab>
          <StyledButton type="button" active={type === 'err'} onClick={() => setType('err')}>.err</StyledButton>
          <StyledButton type="button" active={type === 'eso'} onClick={() => setType('eso')}>.eso</StyledButton>
        </StyledTab>
        <StyledContent hasScroll={logsErr.length > 0}>
          <>
            {logsErr.length > 0 ? logsErr.map((log, index) => {
              return (
                <StyledList key={log.id}>
                  <StyledIndex>{index + 1}</StyledIndex>
                  <StyledMessage>{log.message}</StyledMessage>
                </StyledList>
              )
            }): "The Simulation doesn't has log."}
          </>
        </StyledContent>
        {logsErr.length > 0 && logsErr.length <= totalCount && (
          <StyledMore onClick={handleLoadMore}>
            Show more <ChevronDownIcon fill="#3D70B2" />
          </StyledMore>
        )}
       
      </StyledModal>
    </Portal>
  )
};

export default ViewLogModal;
