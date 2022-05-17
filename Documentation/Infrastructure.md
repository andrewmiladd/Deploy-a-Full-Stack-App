my front-end link : http://udagram-andrewww.s3-website-us-east-1.amazonaws.com
my backend endpoint : http://udagram-api-dev.eba-pibp68id.us-east-1.elasticbeanstalk.com


# Pipeline process
connected to my repo 

- I will run my scripts to install both dependecies : (cd ./udagram/udagram-frontend && yarn) - (cd ./udagram/udagram-api && yarn)
- I will build my application by running both : (cd ./udagram/udagram-api && yarn build) - (cd ./udagram/udagram-frontend && yarn build)
- finally, I will deploy my application : (cd ./udagram/udagram-frontend && aws s3 cp --recursive ./www s3://udagram-andrewww/) - (cd ./udagram/udagram-api && eb init --region us-east-1 --platform Node.js udagram-api && eb use udagram-api-dev && eb deploy)