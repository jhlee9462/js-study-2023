# javascript 공부 저장소입니다.
## vsc 설정
1. code runner 확장 프로그램 설치 : 실행 단축키 ctrl + alt + n
2. javascript code snippet : 여러 단축키를 emmet약어처럼 설정할 수 있다.

---

### ajax 실습시 JSON Server 설치(가상 Rest Api)

- vscode 상단부 -> 터미널 -> 새 터미널

```shell script
$ mkdir json-virtual-server
$ cd json-virtual-server
$ npm init -y
$ npm install json-server -D
```

- package.json에 추가
```json
"scripts": {
    "start": "json-server --watch db.json --port 5000"    
  },
```
- json-server-exam폴더로 가서
- `$ npm start`로 서버실행

---