/* eslint-env node */

const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add module resolution
config.resolver.alias = {
  '@': path.resolve(__dirname, 'src'),
  '@env': path.resolve(__dirname, './env.js'),
};

module.exports = withNativeWind(config, { input: './global.css' });