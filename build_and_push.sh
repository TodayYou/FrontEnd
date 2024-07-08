#!/bin/bash

# 변수 설정
IMAGE_NAME="jjuny0406/react-app"
TAG="newtag"

# Docker 이미지 빌드
docker build -t $IMAGE_NAME:$TAG .

# Docker Hub에 로그인
echo "Docker Hub에 로그인 중입니다..."
docker login

# Docker 이미지 푸시
echo "Docker 이미지를 Docker Hub에 푸시 중입니다..."
docker push $IMAGE_NAME:$TAG

echo "작업이 완료되었습니다!"
