import React, { useRef } from 'react';
import styled from '@emotion/styled';
import oc from 'open-color';

const Capacity = () => {
  const CapacityWrap = styled.div`
    padding: 20px 0;
  `;
  const CapacityList = styled.dl`
    width: 50%;
    margin-bottom: 20px;
    color: ${oc.gray[8]};

    dt {
      margin-bottom: 5px;
      font-weight: 500;
    }

    dd {
      font-size: 13px;
      color: ${oc.gray[7]};
    }
  `;
  const Button = styled.button`
    width: 80%;
    height: 40px;
    //margin-top: 40px;
    border: 1px solid ${oc.blue[5]};
    border-radius: 2px;
    background-color: transparent;
    font-weight: 500;
    color: ${oc.blue[5]};
    transition: all 0.15s ease;

    &:hover {
      background-color: ${oc.blue[5]};
      color: ${oc.gray[0]};
    }

    &:focus {
      outline: none;
    }
  `;
  const FileInput = styled.input`
    opacity: 0;
  `;

  const fileInput = useRef();

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <CapacityWrap>
      <CapacityList style={{ float: 'left' }}>
        <dt>사용량</dt>
        <dd>100KB</dd>
      </CapacityList>
      <CapacityList style={{ float: 'right' }}>
        <dt>전체 용량</dt>
        <dd>무제한</dd>
      </CapacityList>
      <Button onClick={handleClick} type="button">
        업로드
      </Button>
      <FileInput ref={fileInput} type="file" name="files" multiple />
    </CapacityWrap>
  );
};

export default Capacity;
