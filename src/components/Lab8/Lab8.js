import React from 'react';
import Counter from './components/Counter';
import CounterWrong from './components/CounterWrong';
import HandleClick from './components/HandleClick';
import HandleMouseOver from './components/HandleMouseOver';
import ShowImage from './components/ShowImage';
import LoadDataFromJson from './components/LoadDataFromJson';
import UploadFile from './components/UploadFile';
import ChangeStyle from './components/ChangeStyle';

function Lab8() {
  return (
    <div>
      <Counter />
      <CounterWrong />
      <HandleClick />
      <HandleMouseOver />
      <ShowImage />
      <LoadDataFromJson />
      <UploadFile />
      <ChangeStyle />
    </div>
  );
}

export default Lab8;