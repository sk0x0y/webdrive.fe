/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import oc from 'open-color';

const ObjectListView = () => {
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
    }

    &:last-child {
      border-bottom: none;
    }
  `;
  const checkBox = css`
    flex-basis: 50px;
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

  const objectList = [
    {
      name: '움집고.jpg',
      size: '300 KB',
      owner: '관리자',
      updated: '2020-07-21 오전 01:18',
    },
    {
      name: '움막고.jpg',
      size: '800 KB',
      owner: '관리자',
      updated: '2020-07-21 오전 02:32',
    },
    {
      name: '텐트고.jpg',
      size: '1.2 MB',
      owner: '관리자',
      updated: '2020-07-21 오전 02:32',
    },
  ];

  return (
    <div css={objectTable}>
      <div css={objectTableHead}>
        <div css={checkBox}>
          <input type="checkbox" />
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
            console.log(idx);
          }}
        >
          <div css={checkBox}>
            <input type="checkbox" />
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
