import MainContainer from './components/container/container-components/MainContainer';
import PostList from './components/posts/post-components/post-list/PostList';
import UsersList from './components/users/users-components/users-list/UsersList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const {curentUser} = useSelector((state) => state.users)
  console.log(curentUser)
  return (
   
      <div className="flex justify-center">
        <MainContainer>
          <Routes>
            <Route  path='/' element={<UsersList/>}/>
            <Route  path={`/userId${curentUser}posts`} element={ <PostList id={curentUser}/>}/>
          </Routes>
        </MainContainer>
      </div>
  );
}

export default App;
