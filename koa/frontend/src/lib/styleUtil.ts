import { css } from 'styled-components';

type MediaSize = {
  wide?: css;
  desktop?: css;
  tablet?: css;
  phone?: css;
}

export const size = {
  wide: '1200px',
  desktop: '992px',
  tablet: '768px',
  phone: '376px'
}

export const Media: MediaSize = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}) {
      ${css(...args)}
    }
  `

  return acc;
}, {})

export const shadow = (weight) => {
  const shadows = [
    css`box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);`,
    css`box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);`,
    css`box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);`,
    css`box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);`,
    css`box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);`
  ]

  return shadows[weight];
}
