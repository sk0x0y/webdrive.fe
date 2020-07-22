import { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import oc from 'open-color';
import { useDispatch, useSelector } from 'react-redux';
import * as objectControl from '../stores/objectControl';

const ObjectListView = () => {
  const dispatch = useDispatch();
  const { objectList } = useSelector((state) => state.objectControl);
  const [checkAll, setCheckAll] = useState(false);

  const objectTable = css`
    border-bottom: 1px solid ${oc.gray[2]};
    font-size: 12px;
    color: ${oc.gray[7]};
  `;
  const objectTableHead = css`
    display: flex;
    padding: 15px 0 15px 15px;
    border-bottom: 1px solid ${oc.gray[2]};
    box-sizing: border-box;
  `;
  const objectTableItem = css`
    display: flex;
    padding: 15px 0 15px 15px;
    border-bottom: 1px solid ${oc.gray[1]};
    color: ${oc.gray[7]};
    cursor: pointer;

    &:hover {
      background-color: ${oc.gray[0]};

      svg {
        color: ${oc.blue[5]};
      }
    }

    &:last-child {
      border-bottom: none;
    }
  `;
  const checkBox = css`
    position: relative;
    flex-basis: 50px;

    svg {
      position: absolute;
      top: -3px;
      left: 0;
      font-size: 18px;
      color: ${oc.gray[6]};
      cursor: pointer;
    }
  `;
  const objectName = css`
    flex-grow: 1;
  `;
  const objectSize = css`
    flex-basis: 150px;
  `;
  const objectOwner = css`
    flex-basis: 150px;
  `;
  const objectCreated = css`
    flex-basis: 250px;
  `;

  return (
    <div css={objectTable}>
      <div css={objectTableHead}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          css={checkBox}
          onClick={() => {
            setCheckAll(!checkAll);
            dispatch(objectControl.checkAll(checkAll), [dispatch]);
          }}
        >
          {checkAll ? (
            <MdCheckBox color={oc.blue[5]} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
        <div css={objectName}>이름</div>
        <div css={objectSize}>크기</div>
        <div css={objectOwner}>소유자</div>
        <div css={objectCreated}>최근 수정일</div>
      </div>
      {objectList.map((object, idx) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
          css={objectTableItem}
          /* eslint-disable-next-line react/no-array-index-key */
          key={idx}
          onClick={() => {
            dispatch(objectControl.switchCheck(idx), [dispatch]);
          }}
          onContextMenu={() => {
            dispatch(objectControl.switchCheck(idx), [dispatch]);
          }}
        >
          <div css={checkBox}>
            {objectList[idx].checked ? (
              <MdCheckBox color={oc.blue[5]} />
            ) : (
              <MdCheckBoxOutlineBlank />
            )}
          </div>
          <div css={objectName}>{object.name}</div>
          <div css={objectSize}>{object.size}</div>
          <div css={objectOwner}>{object.owner}</div>
          <div css={objectCreated}>{object.updated}</div>
        </div>
      ))}
    </div>
  );
};

export default ObjectListView;
