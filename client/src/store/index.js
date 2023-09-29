import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#011557',
  color01: '#585959',
  color02: '#363636',
  isLogoTexture: false,
  isFullTexture: false,
  logoDecal: './test01.png',
  fullDecal: './test01.png',
})

export default state;