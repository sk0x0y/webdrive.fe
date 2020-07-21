import { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import oc from 'open-color';
import {
  BsFolderPlus,
  BsUpload,
  BsDownload,
  BsCursorText,
  BsGridFill,
  BsListTask,
} from 'react-icons/bs';
import {
  RiFolderSharedLine,
  RiFileCopyLine,
  RiDeleteBin7Line,
  RiShareLine,
} from 'react-icons/ri';

const TabMenu = () => {
  const [listMode, setListMode] = useState(true);

  const ul = css`
    display: flex;
    //margin-bottom: 20px;
    padding: 15px 0 15px 15px;
    border-top: 1px solid ${oc.gray[2]};
    border-bottom: 1px solid ${oc.gray[2]};
  `;
  const li = css`
    position: relative;
    margin-right: 30px;
    font-size: 12px;
    color: ${oc.gray[7]};
    line-height: 12px;
    cursor: pointer;

    &:hover {
      color: ${oc.blue[5]};
    }

    svg {
      position: absolute;
    }
    svg + span {
      margin-left: 17px;
    }
  `;
  const viewMode = css`
    position: relative;
    flex-grow: 1;
    margin-right: 30px;
    font-size: 12px;
    color: ${oc.gray[7]};
    text-align: right;

    > span {
      cursor: pointer;

      &:hover {
        color: ${oc.blue[5]};
      }
    }
    span > svg {
      position: absolute;
    }
    span > span {
      margin-left: 17px;
    }
  `;

  return (
    <ul css={ul}>
      <li css={li}>
        <BsFolderPlus />
        <span>새 폴더</span>
      </li>
      <li css={li}>
        <BsUpload />
        <span>업로드</span>
      </li>
      <li css={li}>
        <BsDownload />
        <span>다운로드</span>
      </li>
      <li css={li}>
        <BsCursorText />
        <span>이름 변경</span>
      </li>
      <li css={li}>
        <RiFolderSharedLine />
        <span>이동</span>
      </li>
      <li css={li}>
        <RiFileCopyLine />
        <span>복사</span>
      </li>
      <li css={li}>
        <RiDeleteBin7Line />
        <span>삭제</span>
      </li>
      <li css={li}>
        <RiShareLine />
        <span>공유</span>
      </li>
      {listMode && (
        <li css={viewMode}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <span
            onClick={() => {
              setListMode(false);
            }}
          >
            <BsGridFill />
            <span>카드로 보기</span>
          </span>
        </li>
      )}
      {!listMode && (
        <li css={viewMode}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <span
            onClick={() => {
              setListMode(true);
            }}
          >
            <BsListTask />
            <span>리스트로 보기</span>
          </span>
        </li>
      )}
    </ul>
  );
};

export default TabMenu;
