import React from 'react';
import { Layer, Stage } from 'react-konva';
import { useSelector } from 'react-redux';
import { URLImage } from '../../components';

const Canva = () => {
  const { shapes } = useSelector((state) => state.figure);
  return (
    <Stage className="stage" width={580} height={500}>
      <Layer>{shapes && shapes.map((item) => <URLImage image={item} key={item.id} />)}</Layer>
    </Stage>
  );
};

export default Canva;
