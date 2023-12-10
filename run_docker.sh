# docker build . --tag 'jayjiang1/shuttlecraft:latest'
docker run -e PORT=3000 -e DOMAIN="shuttlecraft.com" -e USER_NAME="jayjiang" -e PASS="123456" -p "3000:3000" "jayjiang1/shuttlecraft"