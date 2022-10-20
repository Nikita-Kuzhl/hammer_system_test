import React, { useState } from 'react';
import { ImgArray } from '../../constant';
import { useDispatch, useSelector } from 'react-redux';
import {
  addShape,
  addShapesFromFile,
  removeSaveAndShapes,
  removeShape,
  saveInLocalStorage
} from '../../redux/features/figure';
import { Button, Card, Image, Row, Space } from 'antd';
import { CSVLink } from 'react-csv';

const ControlMenu = () => {
  const { shapes } = useSelector((state) => state.figure);
  const dispatch = useDispatch();
  const csvData = [
    ['id', 'x', 'y', 'src'],
    ...shapes.map((item) => {
      return [item.id, item.x, item.y, item.src];
    })
  ];

  const [file, setFile] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf('\n')).split(',');
    const csvRows = string.slice(string.indexOf('\n') + 1).split('\n');

    const array = csvRows.map((i) => {
      const values = i.split(',');
      const obj = csvHeader.reduce((object, header, index) => {
        object[JSON.parse(header)] = JSON.parse(values[index]);
        return object;
      }, {});
      return obj;
    });

    dispatch(addShapesFromFile({ item: array }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  return (
    <>
      <Card>
        {ImgArray &&
          ImgArray.map((item) => (
            <Card
              style={{ width: 150, height: 150 }}
              key={item.id}
              onClick={() => dispatch(addShape({ src: item.src }))}
              cover={
                <Image preview={false} width={'auto'} height={'auto'} alt="button" src={item.src} />
              }></Card>
          ))}
      </Card>
      <Card>
        <Row>
          <input className="button" onChange={handleOnChange} type={'file'} accept={'.csv'} />
          <Button onClick={(e) => handleOnSubmit(e)}>Show File</Button>
        </Row>
        <Row>
          <Space style={{ marginTop: 10 }}>
            <Button onClick={() => dispatch(saveInLocalStorage())}>Save Change</Button>
            <CSVLink data={csvData} target={'_blank'}>
              Save in File
            </CSVLink>
          </Space>
        </Row>

        <Row style={{ marginTop: 10 }}>
          <Space>
            <Button onClick={() => dispatch(removeShape())}>Remove Shape</Button>
            <Button onClick={() => dispatch(removeSaveAndShapes())}>Remove Save and Shapes</Button>
          </Space>
        </Row>
      </Card>
    </>
  );
};

export default ControlMenu;
