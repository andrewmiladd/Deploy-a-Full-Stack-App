Pipeline process: Circle CI/CD connected to my repo https://github.com/andrewmiladd/Deploy-a-Full-Stack-App

process: insatlling dependencies of both front-end and back-end 
 front-end : ("cd ./udagram/udagram-frontend && yarn")
 back-end : ("cd ./udagram/udagram-api && yarn")

 then building both app:
 font-end : (cd ./udagram/udagram-frontend && yarn build)
 backend : (cd ./udagram/udagram-api && yarn build)

 finally deploying them : 
 front-end : (cd ./udagram/udagram-frontend &&  aws s3 cp --recursive --acl public-read ./www s3://udagram-andrewww/)
 backend : (cd ./udagram/udagram-api && eb use udagram-api-dev && eb deploy)