## react函数式组件的负效应钩子
1. useEffect(fun,val);fun:每次加载时执行的方法; val:存在时，只有val改变才会执行fun
2. useState('参数')

  ```js
    export default function  Button()  {
      const  [buttonText, setButtonText] =  useState("Click me,please");
      function handleClick()  {
        return setButtonText("Thanks, been clicked!");
      }
      return  <button  onClick={handleClick}>{buttonText}</button>;
    }
  ```
3. useContext()
    children共享组件状态，使用hooks接收父组件中共享的数据
  ```js
    const AppContext = React.createContext({});
    <AppContext.Provider value={{
      username: 'superawesome'
    }}>
        <div className="App">
          <Navbar/>
          <Messages/>
        </div>
    </AppContext.Provider>
  ```

4. useReducer()
  + 引入 import React, { useReducer } from "react";
  + 定义action函数，组件中引入const [state, dispatch] = useReducer(myReducer, { count: 0 })
  + http://www.ruanyifeng.com/blog/2019/09/react-hooks.html