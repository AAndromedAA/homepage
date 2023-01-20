pipeline {
  agent any

  stages {
    stage("deploy") {
      steps {
        sh 'aws configure set region $AWS_DEFAULT_REGION'
        sh 'aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID'
        sh 'aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY'
        
        sh 'aws s3 cp index.html s3://filenko-devops-s3'
        sh 'aws s3 cp img/* s3://filenko-devops-s3/img'
        sh 'aws s3 cp style.css s3://filenko-devops-s3'
        sh 'aws s3 cp javascript.js s3://filenko-devops-s3'
        echo 'Deploy finished'
      }
    }
  }
}
