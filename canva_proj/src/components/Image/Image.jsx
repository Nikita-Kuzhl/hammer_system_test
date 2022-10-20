import useImage from 'use-image';
import { Image } from 'react-konva';
import React from 'react';
import { useDispatch } from 'react-redux';
import { selectShapeInPanel, updatePositionShape } from '../../redux/features/figure';

// eslint-disable-next-line react/prop-types
const URLImage = ({ image }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      // eslint-disable-next-line react/prop-types
      x={Number(image.x)}
      // eslint-disable-next-line react/prop-types
      y={Number(image.y)}
      draggable
      width={50}
      height={50}
      // I will use offset to set origin to the center of the image
      offsetX={img ? 50 : 0}
      offsetY={img ? 50 : 0}
      onDragEnd={(e) =>
        // eslint-disable-next-line react/prop-types
        dispatch(updatePositionShape({ id: image.id, x: e.target.x(), y: e.target.y() }))
      }
      //eslint-disable-next-line react/prop-types
      onClick={() => dispatch(selectShapeInPanel({ id: image.id }))}
    />
  );
};
export default URLImage;
