# Regex game client

Native desktop application to communicate with regex game server

Based on:
- Angular v4.2
- Electron v1.8
- Angular CLI v1.4 

## Getting started

###Requirements
- Node >= 6.9.0 
- Npm >= 3

###Setup
1. Install Angular CLI dependency globally:
```npm install -g @angular/cli```
2. Install Electron packager dependency globally: ```npm install electron-packager -g```
3. Run ```npm install``` from root folder of the client to download node modules

### Building and running

Run ```npm run electron-build``` to build and start game client desktop application

### Packaging

For windows executable: ```electron-packager . --platform=win32```
For mac executable: ```electron-packager . --platform=darwin```
