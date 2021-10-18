import './App.css';
import PostList from './API/PostList';
import PostForm from './API/PostForm';

function App() {
  return (
    <div className="App">
        <PostForm></PostForm>
        <PostList></PostList>
    </div>
  );
}

export default App;
