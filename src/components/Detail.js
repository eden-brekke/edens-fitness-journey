import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail; // object destructuring, allowing us to just call bodyPart instead of exerciseDetail.bodyPart etc

  return (
    <Stack
      gap='60px'
      sx={{
        flexDirection: {
          lg: 'row'
        },
        p: '20px',
        alignItems: 'center'
      }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading='lazy'
        className='detail-image'
      />
    </Stack>
  )
}

export default Detail