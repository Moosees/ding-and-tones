import { css } from 'styled-components';

const mqSizes = {
  mqW1300: 1300,
  mqW1200: 1200,
  mqW1000: 1000,
  mqW850: 850,
  mqW700: 700,
};

const mediaQueries = Object.keys(mqSizes).reduce((acc, size) => {
  acc[size] = (...args) => css`
    @media screen and (max-width: ${mqSizes[size]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const colorGreyDark = '#333';

export const mainTheme = {
  borderLight: '1px solid rgba(0,0,80,0.1)',
  borderMedium: '1px solid rgba(0,0,80,0.5)',
  borderHeavyDark: `3px solid ${colorGreyDark}`,
  borderHeavyLight: '3px solid #777',
  colorNavBorder: colorGreyDark, // same as borderHeavyDark!
  colorBg: '#e6e6ed',
  colorBox: '#DCDCE5',
  colorText: 'rgb(0, 0, 0, 0.8)',
  colorTextInverted: 'rgba(255, 255, 255, 0.8)',
  colorBeat: '#757D96',
  colorBeatActive: '#A70227',
  colorBtnLight: 'rgba(0, 0, 80, 0.03)',
  colorBtnHeavy: '#C6C6CE',
  colorBtnConfirm: 'rgba(0, 150, 0, 0.9)',
  colorBtnClear: 'rgba(200, 30, 10, 0.4)',
  colorCheckbox: 'rgba(20, 240, 20, 0.9)',
  fzSmallest: '1.2rem',
  fzSmaller: '1.3rem',
  fzSmall: '1.4rem',
  fzMedium: '1.6rem',
  fzLarge: '1.7rem',
  fzLarger: '1.8rem',
  fzLargest: '2.0rem',
  fzHeader: '2.4rem',
  paddingSmall: '1rem',
  paddingMedium: '2rem',
  paddingLarge: '3rem',
  shadowLight: '0px 2px 5px 2px rgba(0, 0, 80, 0.25)',
  shadowHeavy: '0px 5px 10px 1px rgba(0, 0, 80, 0.25)',
  shadowBtnLight: '0px 2px 5px -1px rgba(0, 0, 80, 0.1)',
  shadowBtnHeavy: '0px 2px 5px -1px rgba(0, 0, 80, 0.2)',
  textShadowLight: '0px 2px 4px rgba(0, 0, 80, 0.15)',
  ...mediaQueries,
};
