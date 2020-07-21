import React, { useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import oc from 'open-color';
import * as profileMenu from './stores/profileMenu';
import * as contextMenu from './stores/contextMenu';
import ContextMenu from './components/ContextMenu';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  const dispatch = useDispatch();
  const { isVisible } = useSelector((state) => state.contextMenu);
  const mainElem = useRef();

  useEffect(() => {
    window.addEventListener('click', () => {
      dispatch(profileMenu.hide(), [dispatch]);
      dispatch(contextMenu.hide(), [dispatch]);
    });
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      dispatch(profileMenu.hide(), [dispatch]);
    });
    mainElem.current.addEventListener('contextmenu', (e) => {
      dispatch(contextMenu.show(), [dispatch]);
      dispatch(contextMenu.setPosition({ x: e.pageX, y: e.pageY }), [dispatch]);
    });
  }, [dispatch]);

  const style = {
    margin: '60px 0 0 250px',
    padding: '30px 0 0 30px',
    backgroundColor: oc.white,
  };

  return (
    <div>
      {isVisible && <ContextMenu />}
      <Header />
      <SideMenu />
      <main ref={mainElem} style={style}>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
