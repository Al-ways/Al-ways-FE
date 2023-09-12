### 스택

| 구분                 | 사용 기술           |
| -------------------- | ------------------- |
| 언어                 | TypeScript          |
| 라이브러리           | React               |
| 스타일링             | emotion             |
| 클라이언트 상태 관리 | Redux               |
| 패키지 관리 매니저   | Yarn                |
| 배포                 | AWS s3 / cloudfront |
| 번들러               | Vite                |
| 라우팅               | React-router-dom    |
| HTTP client library  | Axios               |
| 유저 이동 경로       | amplitude           |
| 오류 체크            | sentry              |

<br/>
<br/>


<details>
<summary>TypeScript 사용 이유</summary>
<aside>
💡 프론트엔드 언어

</aside>

프론트엔드의 언어는 대표적으로 Javascript가 있다. JS로 웹사이트를 동적으로 만들어주고 복잡한 기능들을 

구현가능 하게 만들어 주기 때문에 웹사이트에서 필수적이다.

![스크린샷 2023-09-12 오후 5.14.13.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5593314-9384-4e17-a350-19af4a9f6f52/8fd912c6-f8af-4cfe-8c34-8c293fb709ea/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.14.13.png)

위의 표를 보면 typescript 정말 빠르게 치고 올라고 오고있는 언어인데 회사에서도 가장 많이 사용 되는 언어이다.

<aside>
💡 왜 Typescript를 사용할까?

</aside>

| Javascript | Typescript |
| --- | --- |
| 동적타입 언어 | 정적타입 언어 |
| 인터프리터 언어 | 컴파일 언어 |
| 독립적으로 사용가능 | 자바스크립트에 의존적임 (자바스크립트로 컴파일된 후 실행) |
| 좀 더 유연함 (타입에 제한을 받지 않으므로) | 더 나은 구조와 간결함, 일관성, 재사용성 |
| .js 확장자 | .ts 확장자 |
| 작고 간단한 프로젝트에 적합함 | 복잡한 프로젝트에 적합함 |

JS는 동적 타입으로 모든 변수나 객체를 타입 지정을 하지 않는다는점이 있다.(이건 장점이며 단점이다.)

이단점을 보완해서 나온것이 TS이다.

![스크린샷 2023-09-12 오후 5.14.04.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5593314-9384-4e17-a350-19af4a9f6f52/b79117b8-a27d-45f6-b38b-356914ebb228/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.14.04.png)

위표에서 보면 단연 JS가 가장 많이 사용하지만 단점에 대한 보완으로 나온 TS가 빠르게 올라오는 것을 확인할수있다.

### **버그 예방**

자바스크립트의 버그 중 15%를 타입스크립트의 사용으로 미리 예방할 수 있다는 연구가 있다고 합니다. 자바스크립트는 선언할 때 타입을 지정해주지 않기 때문에 동작하면서 언제 나도 모르게 형변환이 되어 있을 수도 있고, 그런 부분으로 인해 예기치 않은 버그가 발생할 수도 있습니다. 심지어 인터프립터 언어 특성상 그런 버그들을 찾는 것 조차 쉽지 않죠. 컴파일 과정이 없기 때문에 에러를 출력하지 않고 실행되기 때문입니다. 타입스크립트를 사용한다고해서 모든 버그를 완전히 막을 수 있는 것은 아니지만 적어도 컴파일단계에서 타입관련 에러는 막을 수 있습니다. 예를들어, strictNullCheck 옵션을 true로 해놨다면 객체/null/undefined가 할당될 수 있는 변수가 있을 때, null이나 undefined가 아닌지 체크하지 않고서는 객체의 속성을 가져올 수 없습니다.

### **더 나은 개발자 경험과 코드 퀄리티 향상**

자바스크립트로 코드를 작성할 때, 객체의 필드나 함수의 매개변수로 들어오는 값이 무엇인지 알기 위해 여러 파일들을 살펴봐야했던 경험이 있을 것입니다. 하지만 타입스크립트를 제대로 사용함으로써 얻을 수 있는 가장 큰 장점중에 하나는 변수의 이름뿐만 아니라 그 데이터의 "type"까지 알 수 있게 해준다는 것입니다. 그래서 코드 작성이 좀 더 쉽고 직관적이게 만들어줍니다. 개발자는 로직과 같은 큰 구조들에만 집중할 수 있게 해주는 것이죠.

또한 오브젝트 안의 속성값을 하나하나 기억할 필요없이 IDE가 자동으로 리스트업 해주기 때문에 개발자 입장에서는 훨신 편해집니다.

### **크로스브라우징(브라우저 호환성) 문제 해결**

모든 브라우저의 지원을 걱정해야하는 프론트개발자 입장에서는 ES6+을 써도 될지 고민이 많을 것입니다. 하지만 타입스크립트는 컴파일 과정에서 ES6+ 문법들을 ES5(또는 ES3)로 바꿔주기 때문에 Babel의 도움 없이 크로스브라우징 문제를 해결할 수 있습니다.

<aside>
💡 꼭 TS여야만 할까?

</aside>

물론 TS만이 아니다 ajv라는 라이브러리를 대표적으로 생각할수있는데 다운로드수는 TS의 2배라고 할수있고 알아본결과 좀더 자세한 type지정이 가능하다.

![스크린샷 2023-09-12 오후 5.13.01.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5593314-9384-4e17-a350-19af4a9f6f52/ba6c4fe8-bf59-4a83-ad3e-9de8396af18a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.13.01.png)

### 그럼왜? ajv를 사용하지 않고 TS를 사용할까?

이번 프로젝트는 취업이 목표이기때문에 회사에서 가장 많이 사용하는 언어를 채택할수밖에 없었다. 물론 TS가 않좋다는건 아니지만 지금 프론트엔드 개발자 구직 사이트를 가보면 프론트엔드 개발자 공고에는 필수적으로 TS가 

있기에 사용을 지향했던거 같다.그리고 접하기 어려웠던 ajv보다 TS는 접하기 쉽고 공용언어 같은 느낌이라 도저히 배제할수 없었다.

참고 : https://npmtrends.com/ajv-vs-typescript

참고 : https://octoverse.github.com/2022/top-programming-languages

</details>


<br/>
<br/>


<summary>Yarn 사용 이유</summary>
<aside>
<img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581488166/noticon/teg1ooxzhglorh6rk9hs.png" alt="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1581488166/noticon/teg1ooxzhglorh6rk9hs.png" width="40px" /> npm의 장점

</aside>

**널리 사용됨**

npm은 JavaScript용 기본 패키지 관리자이자 세계에서 가장 널리 사용되는 패키지 관리자

**사용 용이성**

npm은 간단하고 직관적인 인터페이스를 제공하므로 패키지와 종속성을 쉽게 설치, 관리 및 업데이트할 수 있다.

**버전 관리**

npm은 강력한 버전 관리 기능을 제공하여 패키지와 종속성을 관리 및 업데이트한다.

**CLI 도구**

npm은 패키지 관리 작업을 쉽게 자동화하고 스크립팅할 수 있는 CLI 도구를 제공한다.

<aside>
❗ npm의 단점

</aside>

**느린 성능**

npm은 특히 대규모 프로젝트로 작업하거나 많은 패키지를 설치할 때 느려질 수 있습니다.

**제한된 패키지 품질**

npm은 대규모 패키지 생태계를 보유하고 있지만 모든 패키지가 높은 품질을 제공하는 것은 아닙니다. ality. 패키지를 사용하기 전에 품질을 결정하기 어려울 수 있습니다.

**복잡한 종속성 관리**

npm은 때때로 복잡하고 해결하기 어려운 종속성 충돌을 일으킬 수 있습니다. 종속성이 겹치는 많은 패키지를 사용합니다.

**비공개 패키지에 대한 지원 부족**

개인 패키지를 유지하기 위해 npm은 비공개 패키지 호스팅에 대한 기본 제공 지원을 제공하지 않습니다. 

**보안 문제**

 npm은 과거에 몇 가지 보안 취약점이 있었는데, 이는 민감한 데이터에 의존하는 프로젝트에 문제가 될 수 있습니다. 보안 문제를 완화하려면 npm과 npm이 관리하는 패키지를 정기적으로 업데이트하고 신뢰할 수 없는 소스에서 패키지를 설치할 때 주의하는 것이 중요

<aside>
✅ **Yarn의 장점**

</aside>

**npm보다 빠름**

Yarn은 패키지를 캐시하여 패키지를 설치하고 다시 설치하는 데 걸리는 시간을 줄여 npm보다 빠릅니다.

**결정적**

Yarn은 잠금 파일을 사용하여 동일한 패키지와 버전이 서로 다른 시스템에 설치되도록 하여 빌드를 보다 예측 가능하고 재현 가능하게 만듭니다.

**보안**

 Yarn은 설치된 패키지의 알려진 보안 취약성을 자동으로 확인하고 개발자에게 문제가 있으면 경고합니다.

**오프라인 모드**

Yarn은 오프라인에서 작업할 수 있으므로 제한적인 프로젝트에 적합합니다. 또는 신뢰할 수 없는 인터넷 액세스.

**더 나은 오류 처리**

Yarn은 npm보다 더 나은 오류 처리 및 보고를 제공하므로 패키지 및 종속성 문제를 더 쉽게 디버깅할 수 있습니다.

<aside>
❗ **Yarn의 단점**

</aside>

**작은 생태계**

 Yarn의 생태계는 성장하고 있지만 여전히 npm보다 작기 때문에 특정 패키지를 찾기가 더 어렵습니다. 

**호환성 문제**

 원사 npm용으로 설계된 일부 이전 패키지 또는 워크플로와 호환되지 않을 수 있습니다.

**제한된 지원**

 Yarn은 npm보다 커뮤니티가 작고 지원이 적기 때문에 도움을 찾기가 더 어렵습니다.

**느린 초기 설정**

 Yarn은 특히 대규모 프로젝트의 경우 npm보다 설정 및 구성 시간이 더 오래 걸릴 수 있습니다.

**리소스 집약적**

 Yarn은 특히 패키지를 설치하고 업데이트할 때 더 많은 메모리와 CPU를 사용하여 npm보다 더 많은 리소스를 사용할 수 있습니다.

</details>
<details>

  <br/>
  <br/>
<summary>RTK 사용 이유</summary>
[Redux를 사용하지 않고 Recoil을 사용하는 이유](https://www.notion.so/Redux-Recoil-f27c08aedbe043e3b99e207418eefe4f?pvs=21)

앞에서 설명에서의 recoil을 사용에 대해서 알아봤는데 진행했던 모든 프로젝트에서 

recoil만 다루고 redux쪽을 다룬적이 없어서 이번에 redux는 정말 많이 불편한가에 대해서 

알기 위해서 이번 프로젝트에서는 redux를 사용하기로 하였다.

<aside>
💡 **왜 Redux를 사용하는가?**

</aside>

참고 : https://npmtrends.com/mobx-vs-recoil-vs-redux

![스크린샷 2023-09-12 오후 3.56.46.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5593314-9384-4e17-a350-19af4a9f6f52/8aabce3c-b4b7-4dc0-91a6-a6bab599cbe1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.56.46.png)

지난 1년간에 다운로드 수로 보면 알겠지만 엄청난 사용량에 이유가 가장 크다.

상태관리 라이브러리중에 가장 많이 사용되고 관련자료가 많고 이미 안정성이 검증 되었다고 생각이 들기때문이다.

취업을 생각하며 만드는 포폴이기에 가장 회사에서 많이 사용하는 스택을 사용하는게 취준생이 나에게 가장 

잘 어울리는 라이브러리라고 생각한다.

<aside>
💡 **단점 보완**

</aside>

Redux에 단점은 이렇게 3가지로 생각을 하고있다.

- 단일 스토어 단일 리듀서로 관심사의 분리가 쉽게 이루어지지 않는다.
    - **보완**
        
        ```tsx
        todosSlice.ts
        
        import { createSlice, PayloadAction } from '@reduxjs/toolkit';
        
        interface Todo {
          id: number;
          text: string;
        }
        
        interface TodosState {
          todos: Todo[];
        }
        
        const initialState: TodosState = {
          todos: [],
        };
        
        export const todosSlice = createSlice({
          name: 'todos',
          initialState,
          reducers: {
            addTodo: (state, action: PayloadAction<string>) => {
              const newTodo = { id: Date.now(), text: action.payload };
              state.todos.push(newTodo);
            },
            removeTodo: (state, action: PayloadAction<number>) => {
              state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            },
          },
        });
        
        export const { addTodo, removeTodo } = todosSlice.actions;
        export default todosSlice.reducer;
        ```
        
        ```tsx
        counterSlice.ts
        
        import { createSlice, PayloadAction } from '@reduxjs/toolkit';
        
        interface CounterState {
          value: number;
        }
        
        const initialState : CounterState= {
          value :0,
        };
        
        export const counterSlice = createSlice({
           name:'counter',
           initialState,
           reducers:{
             increment:(state)=>{
               state.value +=1;
             },
             decrement:(state)=>{
               state.value -=1 ;
             }
           }
        })
        
        export const {increment , decrement} = counterSlice.actions;
        
        export default counter.reducer;
        ```
        
        ```tsx
        store/index.ts
        
        import { configureStore } from '@reduxjs/toolkit';
        import createSagaMiddleware from 'redux-saga';
        import { combineReducers } from 'redux';
        import todosReducer from '../features/todosSlice';
        import counterReducer from '../features/counterSlice';
        
        const rootReducer = combineReducers({
          todos: todosReducer,
          counter: counterReducer,
        });
        
        const sagaMiddleware = createSagaMiddleware();
        
        const store = configureStore({
          reducer: rootReducer,
          middleware: [sagaMiddleware],
        });
        
        sagaMiddleware.run(rootSaga);
        
        export default store;
        ```
        
        toolkit을 사용하여 관심사 분리의 방법의 예시이다 todo,counter slice를 정의하고 자테적 액션,리듀서 함수를 가지고 있으며 combineReducers를 이용해 두 slice를 결합하여 루트 리듀서를 생성해준다.
        
        단일 스토어에서 관리하며 개별 기능별로 분리할수있다.
        
- 비동기 상태와 결합이 어렵다.(미들웨어)
    - **보완**
        
        redux-thunk를 사용하여 비동기 처리를 할려고 한다.
        
        RTK같은 경우에는  thunk기반이기 때문에 saga의 단점이라 생각 되는 **es6 generator & yield문법**과
        
        ****typescript 지원이 미흡함****이 가장 큰 문제라고 생각 되기에 사용을 가장 많이 하고 있는 **es7의 async / await**를 
        
        사용하는게 더 좋을거 같다. thunk를 사용함으로서 오류에 대한 많은 자료도 얻을수있을거 같고 redux팀에서도 사용을 권장 하기에 thunk로 보완할려고 한다.
        
        ![스크린샷 2023-09-12 오후 5.00.03.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a5593314-9384-4e17-a350-19af4a9f6f52/d55fe7b9-c7e1-4227-b5b6-2b8e606b5138/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.00.03.png)
        
- 보일러 플레이트가 너무 방대하다.
    - **보완**
        
        redux만 사용했을때에 보일러 플레이트가 많기 때문에 toolkit을 사용하여 조금이나마 
        
        보일러 플레이트를 줄이기로 보완 하려고 한다.
        

<aside>
💡 **결론**

</aside>

- 가장 사용양이 많은 redux생태계를 이해하기 위해 도입
- 단점을 가장 많이 생각하여 이를 보완한다.

</details>
