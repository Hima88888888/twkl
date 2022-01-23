module.exports = {
  // ...other vue-cli plugin options...
 pwa: {
    name: 'Tawakkalna',
    themeColor: '#101218',
    msTileColor: '#101218',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      appleTouchIcon: 'appstore.png',
    },
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // ...other Workbox options...
    }
  }
}