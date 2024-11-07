const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'DailyRouteNC',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

