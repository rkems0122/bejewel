# bejewel 코딩테스트 결과물입니다

## 목차
1. [스택](#스택)
2. [API](#스택)
3. [사용법](#사용법)
## 스택
본 과제에서 요청한 대로 아래와 같은 스택을 사용하였습니다.

- node.js (LTS 버전)
- express.js (최신버전)
- mysql  (5.x 버전)

## API
* API는 본 과제에서 요청한 대로 상품 등록, 상품 불러오기, 상품 편집, 상품 삭제 API를 구현하였습니다.
* 자세한 내용은 gitbook 참고 부탁드립니다.
* [바로가기](https://jeongwon-seo.gitbook.io/bejewel/)

## 사용법
* 처음 실행할 시, mysql에서 'CREATE DATABASE bejewel'을 입력해야됩니다.(즉, 데이터베이스를 생성해야 함)
* 데이터베이스가 생성되었다면 server폴더에서 npm run schema를 입력하여 스키마 등록을 해줍니다.
* npm run schema를 실행하면 mysql의 배치모드가 실행됩니다. 
* 스키마가 생성되었으면, npm run start를 실행하여 Nodemon을 실행하여 서버를 키셔서 테스트하시면 됩니다.
