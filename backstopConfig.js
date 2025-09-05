'use strict';
'https: github.com/garris/BackstopJS#advanced-scenarios';
const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Stars test',
  referenceUrl: basicScenario.referenceUrl + '/stars/',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  viewports: [
    {
      name: 'desktop',
      width: 400,   // ширини достатньо, щоб вмістити 5 зірок
      height: 100,  // висота для блоку
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Entire document',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'Stars container',
      selectors: ['.stars'],
      misMatchThreshold: 0, // строгий контроль — жодних відмінностей
      delay: 500,           // почекати перед скріншотом, щоб відрендерилось
    },
  ],
};

module.exports = config;
