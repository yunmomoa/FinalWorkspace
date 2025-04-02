# Nginx base image
FROM nginx:alpine

# dist 폴더를 Nginx가 서빙하는 기본 디렉토리로 복사
COPY dist/ /usr/share/nginx/html

# 필요하면 custom Nginx 설정도 가능 (없으면 기본값 사용)
# COPY default.conf /etc/nginx/conf.d/default.conf

# 모든 파일에서 'localhost:8003'을 '43.201.73.7:8003'으로 변경
RUN find /usr/share/nginx/html -type f -exec sed -i 's/localhost:8003/43.201.73.7:8003/g' {} +

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
