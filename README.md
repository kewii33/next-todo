Next.js와 타입스크립트를 이용하여 투두리스트가 있는 페이지를 만들었습니다.

1. 메인 페이지

![image](https://github.com/kewii33/next-todo/assets/150649178/8cbaf893-93da-4ed3-b3fb-6211f9edd47f)
홈페이지에 들어가면 제일 처음 나오는 페이지입니다. 네비게이션 바를 통해 다른 페이지로 이동할 수 있습니다.
	


2. about 페이지

![image](https://github.com/kewii33/next-todo/assets/150649178/1967b53c-4827-4b70-892a-05469d7f75f8)
가상의 사이트 TODOLAB에 대해 설명하는 페이지입니다. SSG로 작성하였습니다.



3. report 페이지

![image](https://github.com/kewii33/next-todo/assets/150649178/c45f03ff-f192-4037-a064-bb546b473723)
할 일, 완료된 일의 개수와 합계를 표시해주는 페이지입니다. ISR로 작성하여 10초마다 결과가 갱신될 수 있도록 설정하였습니다.



4. Todo✏️ 페이지

![image](https://github.com/kewii33/next-todo/assets/150649178/7d3cb3aa-2e26-4bb4-ac59-6830c887aaf8)
새로운 투두를 추가하고, 할 일과 완료된 일을 보여주는 페이지입니다. CSR 렌더링 방식으로 만들었습니다.
react query를 이용해서 CRUD가 모두 가능한 페이지로, 완료/취소/삭제 버튼을 눌러 투두의 상태를 바꿀 수 있습니다.
<할 일 통계 보러가기!> 버튼을 누르면 useRouter로 report 페이지로 이동합니다.



5. Todos📋 페이지

![image](https://github.com/kewii33/next-todo/assets/150649178/e89345d8-a43e-4761-ba29-7868496594c8)
투두의 목록만을 볼 수 있는 페이지입니다. SSR 렌더링 방식으로 작성하였습니다. 할 일과 완료된 일을 표시해서 보여주고 있습니다.
<할 일 통계 보러가기!> 버튼을 누르면 Link 태그로 report 페이지로 이동합니다.
