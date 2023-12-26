# 12/26 치지직 업데이트로 넓은 화면에서 채팅창 아래로 이동 공식 지원합니다.
https://game.naver.com/lounge/chzzk/board/detail/3340323

# 구글 크롬 익스텐션: 치지직 넓은 화면 레이아웃 변경기
치지직 "넓은 화면 모드" 에서 레이아웃을 반응형으로 변경합니다. 트위치와 유사하게 화면이 좁아질 경우 채팅창을 아래로 내립니다. 

스타일(css) 조절을 통한 간이 대응이며, 치지직에서 스타일 관련 레이아웃을 변경하였을 경우 제대로 동작하지 않을수 있습니다.

# 적용 환경
pc 크롬에서 사용 가능합니다(모바엘에서는 테스트 하지 않음)

# 적용 방법
1. 익스텐션 설치: zip 파일 다운로드 후 압축 풀기, 다운로드 링크 (가장 최신 버전을 다운받으시면 됩니다): https://github.com/ryuhyoseok/fix_chzzk_layout/releases
2. 익스텐션 적용 (크롬의 익스텐션 적용은 https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world?hl=ko#load-unpacked 참고)
3. 확장 프로그램에서 "Chzzk 레이아웃 변경기" 의 옵션 클릭
4. 원하는 옵션 클릭
5. 치지직 화면 새로고침 후 "넓은 화면 모드(동영상 우측 하단에 버튼 있음)" 로 라이브 감상

# 제공 모드
- **반응형**: 세팅된 가로 픽셀 값 기준으로, 브라우저 넓이가 기준 width 이하일 경우 채팅창을 아래로 고정(기준이 되는 넓이 픽셀은 설정 가능)
- **[0.2 버전 추가] 종횡비 반응형**: 브라우저 종/횡(가로/세로) 비율에 따라 화면 레이아웃이 변경됨, 종횡비는 분수로 표현하며 브라우저 종횡비가 해당 분수값이 될때까지 채팅창을 아래로 고정
- **강제 설정**: 화면 넓이에 상관없이 강제로 채팅창을 아래로 고정
 

# 참고 스크린샷

## 브라우저 넓이가 충분하지 않을때 적용 예시
![2](https://github.com/ryuhyoseok/fix_chzzk_layout/assets/2416795/d775d441-9e69-4f0e-a572-87a74f24f7d4)

## 다운로드 후 파일 확인용 스크린샷
다운로드 후 아래와 같이 파일이 위치해 있으면 됩니다(폴더명은 상관없음)
![스크린샷 2023-12-20 234227](https://github.com/ryuhyoseok/fix_chzzk_layout/assets/2416795/14ba0ca5-0de2-481a-afc1-560c286420ca)


## 옵션 버튼 위치
![1](https://github.com/ryuhyoseok/fix_chzzk_layout/assets/2416795/560014d1-0efe-47d1-89b6-9ef5203d693d)

## 옵션 화면
![44](https://github.com/ryuhyoseok/fix_chzzk_layout/assets/2416795/27571744-f8f9-47cf-9337-67d2b5be2afd)

