# BhandariStor Splash Screen

This repository contains both web and Android implementations of the BhandariStor splash screen.

## Web Version
Located in the `/web` directory. To run:
1. Open `web/index.html` in a browser
2. The splash screen will automatically transition after 4 seconds

## Android Version
Located in the `/android` directory. To implement:
1. Copy the layout file from `android/app/src/main/res/layout/activity_splash.xml`
2. Copy the activity file from `android/app/src/main/java/.../SplashActivity.java`
3. Update your Android Manifest to use SplashActivity as the launcher activity

## Shared Design Elements
- Font: Anton (Google Fonts)
- Colors:
  - Background: #2C1810
  - Logo: #E8D3C3
  - Store Name: #E8D3C3
  - Tagline: #B89F8D
- Animation Duration: 4 seconds
