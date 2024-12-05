import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fabrice.dailyroute',
  appName: 'DailyRouteNC',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      keystorePath: 'android.keystore',
      keystorePassword: 'android',
      keystoreAlias: 'androiddebugkey',
      keystoreAliasPassword: 'android'
    }
  }
};

export default config;