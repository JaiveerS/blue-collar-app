echo "Switching to master branch"
git checkout master

echo "building app"
npm run build

echo "Deploying files to server"
sudo scp -i /home/jaiveer/Documents/private-keys/attempt.key -r build/* ubuntu@140.238.155.208:/var/www/140.238.155.208