# Nginx base image
FROM nginx:alpine

# dist 폴더를 Nginx가 서빙하는 기본 디렉토리로 복사
COPY dist/ /usr/share/nginx/html

# 필요하면 custom Nginx 설정도 가능 (없으면 기본값 사용)
# COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
