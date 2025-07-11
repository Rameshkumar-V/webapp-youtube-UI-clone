
import { Provider } from 'react-redux';
import Body from './components/Body';
import Header from './components/Header';
import configStore from './data/configStore';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {  RouterProvider } from 'react-router-dom';
import { createHashRouter } from "react-router-dom";

import MainContainer from './components/MainContainer';
import VideoWatchContainer from './components/VideoWatchContainer';

function App() {
  const Router = createHashRouter([
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
        <div className="App min-h-screen w-full">
          {/* <Header /> */}
          <RouterProvider router={Router}></RouterProvider>
        </div>
      </Provider>
    </>
  );
}

export default App;
