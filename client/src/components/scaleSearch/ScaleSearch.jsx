import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { API_ADDRESS } from '../../oauth';
import { loadScale } from '../../redux/scale/scale.actions';

const ScaleSearch = ({ loadScale }) => {
  const [scales, setScales] = useState([]);

  useEffect(() => {
    if (!scales.length)
      axios
        .get(`${API_ADDRESS}/scale`)
        .then((res) => {
          if (res.status !== 200) throw new Error('Could not get scales');
          setScales(res.data);
        })
        .catch((error) => console.error(error));
  }, []);

  const scaleList = useMemo(() =>
    scales.map(
      (scale) => {
        return (
          <div
            key={scale._id}
            onClick={() =>
              loadScale(scale.name, scale.layout, scale.scale.simple)
            }
          >
            {scale.name} - ({scale.scale.simple.join(' ')})
          </div>
        );
      },
      [scales]
    )
  );

  return <div>{scaleList}</div>;
};

export default connect(null, { loadScale })(ScaleSearch);
