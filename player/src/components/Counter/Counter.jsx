import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment, incrementAsync, incrementByAmount, incrementIfOdd, selectCount } from '../../app/features/counter/counterSlice';
// Images
import logoImg from  "../../assets/images/logo.png"
// Styles
import { AsyncBtn, Btn, ImgWrap, Row, TextBox, Value } from './Counter.styles';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;


  return (
    <div>
      <ImgWrap>
        <img src={logoImg} alt="logo"/>    
      </ImgWrap>
      <Row>
        <Btn
         
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement())
          }}
        >
          -
        </Btn>
        <Value>{count}</Value>
        <Btn
          
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Btn>
      </Row>
      <Row>
        <TextBox
          
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Btn
          
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </Btn>
        <AsyncBtn
          
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </AsyncBtn>
        <Btn
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </Btn>
      </Row>
    </div>
  );
}
