import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const { NativeModules } = require('react-native');
  const scriptURL = NativeModules.SourceCode?.scriptURL;
  let host = 'localhost';

  if (scriptURL) {
    host = scriptURL.split('://')[1].split(':')[0];
  }

  Reactotron
    .configure({
      name: 'MyApp',
      host,
    })
    .useReactNative()
    .connect();

  console.tron = Reactotron;

  Reactotron.clear();
  console.tron.log('✅ Reactotron connected on ' + host);
}
