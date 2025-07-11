
import { Provider } from 'react-redux';
import Body from './components/Body';
import Header from './components/Header';
import configStore from './data/configStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import VideoWatchContainer from './components/VideoWatchContainer';


function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "/watch", element: <VideoWatchContainer /> },
      ],
    },
  ]);
  return (
    <>
      <Provider store={configStore}>
        <div className="App">
          <Header />
          <RouterProvider router={Router}></RouterProvider>
        </div>
      </Provider>
    </>
  );
}

export default App;
