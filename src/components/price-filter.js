import React from 'react';
import { Range } from 'react-range';

const Pricefilter = () => {
  const [values, setValues] = React.useState([0, 100]);

  return (
    <section className='section-padding'>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100%'}}>
        <Range
          step={1}
          min={0}
          max={100}
          values={values}
          onChange={(newValues) => {
            setValues(newValues);
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '6px',
                width: '100%',
                backgroundColor: '#ccc',
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: '4px',
                  // background: `linear-gradient(to right, rgb(165 148 249) ${values[0]}%, #ccc ${values[0]}%, #ccc ${values[1]}%, rgb(165 148 249) ${values[1]}%)`,
                  background: `linear-gradient(to right, #ccc ${values[0]}%, rgb(165 148 249) ${values[0]}%, #ccc ${values[1]}%, #ccc ${values[1]}%)`,

                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '24px',
                width: '24px',
                borderRadius: '50%',
                backgroundColor: 'rgb(165 148 249)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                }}
              />
            </div>
          )}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <h5>{values[0]}</h5>
          <h5>{values[1]}</h5>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Pricefilter;