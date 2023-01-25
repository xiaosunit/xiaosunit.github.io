/*
 * @Author       : Sun
 * @Date         : 2023-01-24 22:23:15
 * @LastEditTime : 2023-01-24 23:59:19
 * @Description  : 
 * @FilePath     : \xiaosunit\themes\kaze\src\scripts\rollup.config.js
 */
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './main.ts',
  output: {
    file: '../../source/js/main.js',
    format: 'iife',
  },
  plugins: [typescript(), terser()],
}
