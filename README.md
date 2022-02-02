1/28 create-react-app을 github에 연결

git remote add origin [git 주소]
git branch -M main
git push -u origin main

2/2 class array처럼 사용하는 classNames 사용법

npm install classNames
ex) TodoListItem에 있는 내용.
styles = {classNames(style.checkbox, {[style.checked]: checked})};
-> 앞에는 단순한 추가기능을 사용, 뒤에 내용은 bool checked를 통하여 추가여부를 확인 후 추가
