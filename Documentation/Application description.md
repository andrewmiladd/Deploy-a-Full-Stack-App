# What app is this ?
This is an Angular application called Udagram, it makes you able to create account and login to create posts

# How it is deployed on AWS ?
first I created my postgres database to store users data, the i Created my S3 bucket to host my static file in it (link: S3 BUCKET link 
http://udagram-andrewww.s3-website-us-east-1.amazonaws.com/home)
Then i created my envoirment in elastic beanstalk to deploy my API in it and i had configuerd my env. variables in it.

# Pipeline process

My pipeline process is started by :
- Installing node
- installing yarn
- checout my code
- AWS-CLI and eb-cli setup

after that I am starting to run my commands:
- first I am installing my Front-end and Backend dependencies
- Then  I am building my fron-end and Backend to deploy them
- finally , I am deploying my Front-end and Backend

