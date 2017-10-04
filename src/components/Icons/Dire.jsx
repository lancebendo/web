import React from 'react';
import styled from 'styled-components';
import constants from '../constants';

const icon = props => (
  <svg {...props} viewBox="0 0 300 300">
    <path
      d="M150,106.4c0,0,6.6,0,8,0.5c1.4,0.5,2.3,4.2,5.2,5.2c2.3,0.9,35.6,1.4,35.2,3.7c0,2.3-2.3,2.8-2.8,3.8
      c-0.5,1.4,1.4,3.3-3.3,3.8c-4.7,0.9-5.6-3.3-5.6-3.3s-8.9-1.4-15.5,0.5c-3.3,0.9-5.6,4.2-8,6.6c-2.3,2.3-4.2,3.3-4.7,4.2
      c-0.9,2.3-0.5,5.6,0.5,6.1c0.9,0.5,4.2-4.7,5.6-5.6c0.5-0.5,4.2-1.4,8.9-1.9c1.9-0.5,3.8,0.5,5.6,0c3.8-0.5,7-1.9,9.8-2.8
      c5.6-1.4,10.3-2.3,10.3-2.8c0.9-0.9,0.5-4.2,0.5-4.2s1.9-0.9,1.9-1.9s-0.9-1.9-1.4-2.3c-0.5-0.5,0-4.7-1.4-6.1
      c-1.4-1.4-23-3.8-23.9-5.2c-0.9-1.4,1.4-2.8,0.5-6.6c-0.9-3.8-1.9-12.7-1.9-12.7s0-13.6-0.5-15.5c-0.5-1.9-0.5-0.9-1.4-2.3
      c-0.9-1.4-1.4-10.8-1.4-10.8s2.3,0.5,3.8-0.5c1.4-0.9,2.8-5.6,2.8-5.6s4.2-0.5,4.7-0.9c0.5-0.5,0.9-3.3,0.9-4.2
      c0-1.4-0.9-1.9-0.9-3.8c0-1.9,0.5-6.1,0.5-6.6c0.5,0-1.4-0.5-1.9-1.4c-0.5-0.9-1.9-3.3-1.9-3.3s5.2,3.8,7,0.9s0.9-7,0.9-7
      s-3.3-6.1-3.3-7.5s0.9-7.5,0.9-7.5l1.4-1.4c0,0-2.3-3.3-2.3-4.2c0-0.9,1.4-3.8,2.8-3.8c1.4,0,1.9,3.8,1.9,3.8s0.5,3.3,0.9,6.1
      c0.5,2.8,5.2,10.3,5.2,10.3s-1.4,8,0,9.4c1.4,1.4,3.3-2.3,4.2-0.5c0.9,1.9-1.4,1.4-0.9,5.2s2.8,3.3,2.8,3.3s-0.5,4.2-0.5,7
      c0.5,2.8,1.9,5.2,1.9,5.2s-9.4,7.5-7.5,9.8c1.9,2.3,5.6,2.3,8,0.9c2.3-0.9,6.6-5.6,6.6-5.6s1.9,1.9,1.4,2.3
      c-0.5,0.5-1.9,1.9-0.9,4.2s4.2,2.8,4.2,2.8s-1.4,4.7-2.3,5.6c-0.9,0.9-3.3,0.5-3.3,0.5s-1.4,1.4-2.3,1.9c-0.9,0.5-4.2,0.9-4.2,0.9
      l0.9,2.8c0,0-4.7,2.3-2.3,3.8c4.2,2.8,8.9-1.9,8.9-1.9s1.4,0.9,2.8,0.5c1.4-0.5,1.4-1.9,1.4-1.9h2.8c0,0-2.3,5.6-1.4,6.6
      c0.9,1.4,6.1-2.3,5.6,0.9c-0.9,2.8-10.3,2.3-13.1,5.6c-2.8,3.3-0.5,6.6,0.9,6.6c1.4,0.5,18.3-8.4,19.7-5.2c1.9,3.3-3.8,5.6-2.8,8.4
      c0.9,2.8,8-2.3,8,1.4c0,3.3-9.4,7.5-8,10.3c1.4,2.8,3.8,0.9,3.8,0.9s4.2,1.9,4.7,2.8c0.5,0.9-4.7,1.9-4.7,1.9l-0.5,1.9l4.2,0.5
      c0,0,3.3,3.7,3.8,5.2c0,1.4-13.1,4.2-13.1,5.6c-0.5,1.4,0.5,1.9,0.5,1.9s-3.3-0.5-4.7,0c-1.4,0.5-5.6,3.7-5.6,3.7
      s-7.5-1.9-10.3-1.4c-2.8,0.5-7.5,2.3-7.5,2.3l3.8,0.9l-3.8,3.8c0,0,5.6,1.9,9.4,1.4c3.8-0.5,10.8-5.2,12.7-6.1
      c1.9-0.5,8.4-0.5,8.4-0.5s10.8-7.5,13.1-5.6c2.3,2.3-0.5,8.9-0.5,11.3s0.9,8,0.9,8s-15.5,0-19.7,1.4c-3.8,0.9-6.6,2.8-6.6,2.8h-4.7
      l-1.4,5.2c0,0-14.5,0-14.1,0.9c0.5,0.9,4.2,0.9,4.7,1.9c0.9,0.9,0,2.3,0,2.3h-5.2l-11.3,2.3l16.9,1.4c0,0-0.5,7-1.9,8
      s-4.7,0.5-5.6-0.5s-2.3-1.9-2.3-1.9s-12.7,8-13.1,11.3c-0.5,2.8,5.2-0.5,8.4,2.8c1.4,1.9,0.5,3.8-0.5,5.2c-0.5,1.4,0,1.9-0.9,2.8
      c-1.4,2.3-8.9,2.8-7.5,6.1c3.3,3.3,4.7-1.4,6.6-0.5c1.9,0.9-0.5,8.9-0.5,8.9s-13.1,3.8-11.3,7s5.6-2.3,8.4-0.5
      c2.8,1.4,0.9,9.8,0.9,9.8s-5.2-0.5-5.2,1.4s5.6-0.9,6.1,1.4c0.5,2.3-1.9,2.8-1.9,2.8s0,8.4,0.5,9.4c0.5,0.9,2.8,0.9,2.8,0.9
      s-1.4,3.3-5.2,5.6c-3.3,1.9-4.7-2.3-6.6-0.9s3.3,5.2,3.3,5.2s-1.9,2.8-2.8,7.5c-0.9,4.7-0.9,11.7-0.9,11.7s-5.2,4.2-6.6,8
      c-1.4,3.8-3.8,13.1-4.7,14.5c-1.4,1.4-7,6.1-7,6.1V106.4z"
    />
    <path
      d="M170.2,102.2l-6.6-0.9c0,0,0.9-2.3,0.9-4.2c0-2.3-0.9-4.2,0.5-7c1.4-2.8,2.8-8.4,2.8-8.4s0.9,9.8,2.3,13.1
      C172,98,170.2,102.2,170.2,102.2z"
    />
    <path
      d="M201.6,215.2c0,0-8.9,2.3-10.3,4.2c-1.4,1.9-1.4,10.8-1.4,10.8s3.8,0.9,9.4,5.6s9.8,8,9.8,8s1.9-6.6,0.5-9.4
      c-1.4-2.8-2.8-4.2-2.8-4.2s1.9-3.3,0.5-7C206.3,219.4,201.6,215.2,201.6,215.2z"
    />
    <path
      d="M203.4,258.3c0,0-2.3,0.5-6.1,4.7c-4.2,4.2-3.3,5.6-3.3,5.6s6.6,5.6,11.3,7.5s6.6,0.9,10.3,3.3
      s10.3,8.9,12.2,6.6c1.9-2.8-2.8-4.7-9.4-11.3C212.3,267.7,203.4,258.3,203.4,258.3z"
    />
    <path
      d="M199.2,191.3c0,0,9.8-17.3,15.9-19.7s15,2.8,15.9,1.4c0.9-1.4-3.3-3.7-3.3-3.7l7-3.8c0,0,0.5,1.9,3.7,2.8
      c3.3,0.9,12.2-1.4,12.2-1.4l-13.1,6.1c0,0,7,1.4,11.3,4.2c4.2,2.3,7,6.1,7,6.1l7.5,1.4c0,0-0.5,3.3-4.7,3.3s-23-1.4-23-1.4
      s-7,4.2-5.2,5.6c1.9,1.4,12.2-0.5,12.2-0.5l-6.1,4.2l-6.1,2.3c0,0,3.8,3.8,8.9,4.7c5.2,0.9,12.7-1.9,12.7-1.9s1.9,3.8,3.8,6.1
      c1.9,2.3,23.4,15,23.4,15s-0.9,3.8-7.5,3.3c-6.1-0.5-22-6.6-23.4-6.1c-1.4,0.5-3.3,1.4-3.3,1.4s-1.4-5.2-2.8-6.1
      c-1.4-0.9-5.6-0.5-5.6-0.5l-11.3-8.4c0,0-3.3,10.3,8,17.8c10.8,7.5,20.6,3.8,20.6,3.8s9.4,9.8,14.5,12.2
      c5.2,2.3,19.2,9.4,17.3,10.3c-0.5,0.5-2.3,0.9-3.3,0.5c-2.3-0.9-4.2-4.2-7.5-5.2c-4.7-1.4-9.4,0.5-9.4,0.5l-4.2-1.9l-13.1,0.5
      l-4.7,3.3l-8.4-1.9c0,0,0.5,6.6,4.7,9.4c4.2,2.8,8.4,1.9,8.4,1.9s18.3,20.6,30.5,26.7c12.2,5.6,21.1,8.4,21.1,8.4s-20.6-3.8-28.6-8
      c-13.6-7.5-20.6-13.6-28.1-18.8c-7.5-5.2-23-8-23-8s0.5-10.3-0.5-14.1c-0.9-3.7-6.6-8-6.6-8s0.9-5.2,0.9-7.5s-2.3-2.8-2.3-2.8
      l-0.9-4.7c0,0-6.1-8.9-6.1-13.1c0-4.2,0.9-8.9,0.9-8.9s1.4-6.6-0.9-6.6C203,191.3,199.2,191.3,199.2,191.3z"
    />
    <path
      d="M241.4,75c0,0,3.3,0.5,7.5,3.3c4.2,2.8,4.2,7.5,8.4,7.5c4.2,0,11.7-11.7,14.5-13.1c3.3-1.4,5.2,1.4,5.2,1.4
      l9.4-15l-5.2-2.8c0,0-6.6,7.5-8.9,7c-2.8,0-6.1-0.5-6.1-0.5s-5.2,13.1-8.4,13.6c-3.3,0.5-0.5-11.7,0.9-15
      c1.4-2.8,10.3-3.8,10.3-3.8l8.9-17.3c0,0-2.8,3.8-5.2,5.6c-2.3,1.9-13.6-0.5-16.4,0.5c-2.3,0.9-6.6,1.9-6.6,1.9s0-4.2,1.4-8
      c1.4-3.8,7-7,7.5-9.4s0-5.2,1.4-7c1.9-1.4,7-7.5,7-7.5s-8.4,3.8-10.3,6.1c-1.9,2.3-2.8,8-4.7,11.7c-2.3,4.2-13.1,8.4-13.1,8.4
      s3.8,5.6,4.7,8c1.4,2.3-1.9,5.2-1.9,5.2s2.8,4.7,3.3,8C245.6,67,241.4,75,241.4,75z"
    />
    <polygon points="236.7,73.6 240.5,66.6 238.1,60.9 234.4,48.3 234.4,56.7 232,63.3" />
    <polygon points="227.3,41.7 236.3,24.4 233.4,25.8 225,33.3" />
    <path
      d="M150,106.4c0,0-6.6,0-8,0.5c-1.4,0.5-2.3,4.2-5.2,5.2c-2.3,0.9-35.6,1.4-35.2,3.7c0,2.3,2.3,2.8,2.8,3.8
      c0.5,1.4-1.4,3.3,3.3,3.8c4.7,0.9,5.6-3.3,5.6-3.3s8.9-1.4,15.5,0.5c3.3,0.9,5.6,4.2,8,6.6c2.3,2.3,4.2,3.3,4.7,4.2
      c0.9,2.3,0.5,5.6-0.5,6.1c-1.4,0-4.2-4.7-5.6-5.6c-0.5-0.5-4.2-1.4-8.9-1.9c-1.9-0.5-3.8,0.5-5.6,0c-3.8-0.5-7-1.9-9.8-2.8
      c-5.6-1.4-10.3-2.3-10.3-2.8c-0.9-0.9-0.5-4.2-0.5-4.2s-1.9-0.9-1.9-1.9c0-1.4,0.9-1.9,1.4-2.3c0.5-0.5,0-4.7,1.4-6.1
      c1.4-1.4,23-3.8,23.9-5.2c0.9-1.4-1.4-2.8-0.5-6.6c0.9-3.8,1.9-12.7,1.9-12.7s0-13.6,0.5-15.5s0.5-0.9,1.4-2.3s1.4-10.8,1.4-10.8
      s-1.9-0.5-3.3-1.4s-2.8-5.6-2.8-5.6s-4.2-0.5-4.7-0.9c-0.5-0.5-0.9-3.3-0.9-4.2c0-1.4,0.9-1.9,0.9-3.8c0-1.9-0.5-6.1-0.5-6.6
      c-0.5,0,1.4-0.5,1.9-1.4c0.5-0.9,1.4-2.3,1.4-2.3s-5.2,3.8-7,0.9s-0.9-7-0.9-7s3.3-6.1,3.3-7.5s-1.4-7.5-1.4-7.5L114.4,8
      c0,0,2.3-3.3,2.3-4.2c0.5-0.9-0.9-3.7-2.3-3.7c-0.9,0-1.9,3.8-1.9,3.8S112,7,111.6,9.8c-0.5,2.8-5.2,10.3-5.2,10.3s1.4,8,0,9.4
      c-1.4,1.4-3.3-2.3-4.2-0.5c-0.9,1.9,1.4,1.4,0.9,5.2s-2.8,3.3-2.8,3.3s0.5,4.2,0.5,7s-2.3,4.7-2.3,4.7s9.4,7.5,7.5,9.8
      s-5.6,2.3-8,0.9c-2.3-0.9-6.6-5.6-6.6-5.6s-1.9,1.9-1.4,2.3c0.5,0.5,1.9,1.9,0.9,4.2c-0.9,2.3-4.2,2.8-4.2,2.8s1.4,4.7,2.3,5.6
      c0.9,0.9,3.3,0.5,3.3,0.5s1.4,1.4,2.3,1.9c0.9,0.5,4.2,0.9,4.2,0.9L98,75.5c0,0,4.7,2.3,2.3,3.8c-4.2,2.8-8.9-1.9-8.9-1.9
      s-1.4,0.9-2.8,0.5c-1.4-0.5-1.4-1.9-1.4-1.9h-2.8c0,0,2.3,5.6,1.4,6.6c-0.9,1.4-6.1-2.3-5.6,0.9c0.9,2.8,10.3,2.3,13.1,5.6
      c2.8,3.3,0.5,6.6-0.9,6.6c-1.4,0.5-18.3-8.4-19.7-5.2c-1.9,3.3,3.8,5.6,2.8,8.4c-0.9,2.8-8-2.3-8,1.4c0,3.3,9.4,7.5,8,10.3
      c-1.4,2.8-3.8,0.9-3.8,0.9s-4.2,1.9-4.7,2.8c-0.5,0.9,4.7,1.9,4.7,1.9l0.5,1.9l-4.2,0.5c0,0-3.3,3.7-3.8,5.2
      c-0.5,1.4,13.1,4.2,13.1,5.6c0.5,1.4-0.5,1.9-0.5,1.9s3.3-0.5,4.7,0c1.4,0.5,5.6,3.7,5.6,3.7s7.5-1.9,10.3-1.4
      c2.8,0.5,7.5,2.3,7.5,2.3l-3.8,0.9l3.8,3.8c0,0-5.6,1.9-9.4,1.4c-3.8-0.5-10.8-5.2-12.7-6.1c-1.9-0.9-8.4-0.5-8.4-0.5
      s-10.8-7.5-13.1-5.6c-2.3,2.3,0.5,8.9,0.5,11.3s-0.9,8-0.9,8s15.5,0,19.7,1.4c4.2,1.4,6.6,2.8,6.6,2.8h4.7l1.4,4.2
      c0,0,14.5,0,14.1,0.9c0,0.9-4.2,0.9-4.7,1.9c-0.9,0.9,0,2.3,0,2.3h5.2l11.3,2.3l-16.9,1.4c0,0,0.5,7,1.9,8c1.4,0.9,4.7,0.5,5.6-0.5
      c1.9,0.5,2.8-0.5,2.8-0.5s12.7,8,13.1,11.3c0.5,3.3-5.2-0.5-8.4,2.8c-1.4,1.9-0.5,3.8,0.5,5.2c0.5,1.4,0,1.9,0.9,2.8
      c1.4,2.3,8.9,2.8,7.5,6.1c-3.3,3.3-4.7-1.4-6.6-0.5c-1.9,0.9,0.5,8.9,0.5,8.9s13.1,3.8,11.3,7c-1.9,3.3-5.6-2.3-8.4-0.5
      c-2.8,1.4-0.9,9.8-0.9,9.8s5.2-0.5,5.2,1.4s-5.6-0.9-6.1,1.4c-0.9,1.9,1.9,2.8,1.9,2.8s0,8.4-0.5,9.4c-0.5,0.9-2.8,0.9-2.8,0.9
      s1.4,3.3,5.2,5.6c3.3,1.9,4.7-2.3,6.6-0.9c1.9,1.4-3.3,5.2-3.3,5.2s1.9,2.8,2.8,7.5c0.9,4.7,0.9,11.7,0.9,11.7s5.2,4.2,6.6,8
      c1.4,3.8,3.7,13.1,4.7,14.5c0.9,1.4,7,6.1,7,6.1V106.4z"
    />
    <path
      d="M98.4,215.2c0,0,8.9,2.3,10.3,4.2c1.4,2.3,1.4,10.8,1.4,10.8s-3.8,0.9-9.4,5.6s-9.8,8-9.8,8s-1.9-6.6-0.5-9.4
      c1.4-2.8,2.8-4.2,2.8-4.2s-1.9-3.3-0.5-7C93.8,219.4,98.4,215.2,98.4,215.2z"
    />
    <path
      d="M96.6,258.3c0,0,2.3,0.5,6.1,4.7c3.7,4.2,3.3,5.6,3.3,5.6s-6.6,5.6-11.3,7.5s-6.6,0.9-10.3,3.3
      s-10.3,8.9-12.2,6.6c-1.9-2.8,2.8-4.7,9.4-11.3C87.7,267.7,96.6,258.3,96.6,258.3z"
    />
    <path
      d="M100.8,191.3c0,0-9.8-17.3-15.9-19.7c-6.1-2.3-15,2.8-15.9,1.4c-0.9-1.4,3.3-3.7,3.3-3.7l-7-3.8
      c0,0-0.5,1.9-3.8,2.8c-3.3,0.9-12.2-1.4-12.2-1.4l13.1,6.1c0,0-7,1.4-11.3,4.2c-4.2,2.8-7,5.6-7,5.6l-7.5,1.4c0,0,0.5,3.3,4.7,3.3
      s23-1.4,23-1.4s7,4.2,5.2,5.6c-1.9,1.4-12.2-0.5-12.2-0.5l6.1,4.2l6.1,2.3c0,0-3.8,3.8-8.9,4.7c-5.2,0.9-12.7-1.9-12.7-1.9
      s-2.3,3.3-4.2,5.6c-1.9,2.3-23.4,15-23.4,15s0.9,3.8,7.5,3.3c6.6-0.5,22-6.6,23.4-6.1c1.4,0.5,3.3,1.4,3.3,1.4s1.4-5.2,2.8-6.1
      c1.4-0.9,5.6-0.5,5.6-0.5l11.3-8.4c0,0,3.3,10.3-8,17.8c-11.3,7.5-20.6,3.8-20.6,3.8s-9.4,9.8-14.5,12.2s-19.2,9.4-17.3,10.3
      c0.5,0.5,2.3,0.9,3.3,0.5c2.3-0.9,4.2-4.2,7.5-5.2c4.7-1.4,9.4,0.5,9.4,0.5l4.2-1.9l13.1,0.9l4.7,3.3l8.4-1.9c0,0-0.5,6.6-4.7,9.4
      s-8,2.8-8,2.8S33.3,278,21.1,284.1C8.4,289.7,0,292,0,292s20.6-3.8,28.6-8c13.6-7.5,20.6-13.6,28.1-18.8s23-8,23-8
      s-0.5-10.3,0.5-14.1c0.9-3.7,6.6-8,6.6-8s-0.9-5.2-0.9-7.5s2.3-2.8,2.3-2.8l0.9-4.7c0,0,6.1-8.9,6.1-13.1c0-4.2-0.9-8.9-0.9-8.9
      s-1.4-6.6,0.9-6.6S100.8,191.3,100.8,191.3z"
    />
    <path
      d="M58.6,75c0,0-3.3,0.5-7.5,3.3c-4.2,2.8-4.2,7.5-8.4,7.5S30.9,74.1,28.1,72.7c-3.3-1.4-5.2,1.4-5.2,1.4l-9.4-15
      l5.2-2.8c0,0,6.6,7.5,8.9,7c2.8,0,6.1-0.5,6.1-0.5s5.2,13.1,8.4,13.6c3.3,0.5,0.5-11.7-0.9-15c-1.4-2.8-10.3-3.8-10.3-3.8L22,40.3
      c0,0,2.8,3.8,5.2,5.6c2.3,1.9,13.6-0.5,16.4,0.5c2.3,0.9,6.6,1.9,6.6,1.9s0-4.2-1.4-8c-1.4-3.8-7-7-7.5-9.4c-0.5-2.3,0-5.2-1.4-7
      c-1.4-1.9-7-7.5-7-7.5s8.4,3.8,10.3,6.1c2.3,2.8,2.8,8,4.7,11.7c2.3,4.2,13.1,8.4,13.1,8.4s-3.8,5.6-4.7,8
      c-1.4,2.3,1.9,5.2,1.9,5.2s-2.8,4.7-3.3,8C54.8,68,58.6,75,58.6,75z"
    />
  </svg>
);

export default styled(icon)`filter: drop-shadow(0 0 5px ${constants.colorDanger});
  fill: black !important;
margin-left: 5px;`;
