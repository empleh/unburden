# unburden

##Deployment steps
1) expo publish
1) expo build:ios
    - curl -o app.ipa "$(expo url:ipa --non-interactive)"
1) expo upload:ios
    - xcrun altool --upload-app -f app.ipa -u USERNAME
1) expo build:android -t app-bundle
1) expo upload:android

##Commands
- sudo chown -R $(whoami) usr/local/lib/node_modules/expo-cli/