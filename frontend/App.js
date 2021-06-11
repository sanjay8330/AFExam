import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/navBar';
import Author from './components/Authors/author';
import AddBook from './components/Books/addBooks';
import ViewBooks from './components/Books/viewBooks';
import ViewBookAuthor from './components/Books/viewBookAuthor';

function App (){
    return(
        <div>
            <Router>
                <NavBar />

                <section>
                    <Switch>
                        <Route path="/addAuthor" component={ Author } />
                        <Route path="/addBook" component={ AddBook } />
                        <Route path="/viewBooks" component={ ViewBooks }  exact/>
                        <Route path="/:bookId" component={ ViewBookAuthor } />
                    </Switch>
                </section>
            </Router>
        </div>
    )
}

export default App;