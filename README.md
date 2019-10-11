# unburden

##Deployment steps
1) expo publish
1) expo build:ios
1) curl -o app.ipa "$(expo url:ipa --non-interactive)"
1) expo upload:ios