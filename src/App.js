// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';

import productsData from './components/assets/database/products.json';
import Products from './components/Products/Products';
import Product from './components/Products/Product/Product';
import Header from './containers/Header/Header';
import Sidebar from './containers/Sidebar/Sidebar';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';
import './App.scss';
// import Button from './components/UI/Button/Button';

class App extends Component {
    state = {
        search: '',
        showModal: false,
        showProducts: false,
        activeCategory: null,
        activePage: null
    }

    componentDidMount() {
        // const activeButton = document.querySelector('.Button.Active');
        // console.log('[activeButton]', activeButton);
        // const activeCategory = activeButton.textContent.toLowerCase();
        // console.log('[activeCategory]', activeCategory);
        this.setState({ showProducts: true });
    }
    
    onSearchHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

        // console.log('[e.target.value]', e.target.value);
        // console.log('[value]', value);
    }

    toggleCategoryHandler = (e) => {
        // console.log('[e.target]', e.target);
        const { activePage } = this.state;
        const button = e.target;
        const categories = button.parentElement.children;
        for (const categoryBtn of categories) {
            categoryBtn.classList.remove('Active');
        }

        button.classList.add('Active');
        // console.log('[button]', button);
        const currentCategory = button.dataset.category;
        console.log('[currentCategory]', currentCategory);
        this.setState({ activeCategory: currentCategory, activePage: 1 });
        // this.setState({activePage:  ''});
        console.log('[activePage]', activePage);
    }

    openModalHandler = () => {
        this.setState({ showModal: true });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
    }

    onChangePageHandler = (e) => {
        const paginationButton = e.target;
        const { activePage } = this.state;

        if (!paginationButton.classList.contains('PaginationButton')) return;
        // console.log('[paginationButton]', paginationButton);
        for (const button of paginationButton.parentElement.children) {
            button.classList.remove('Active');
        }
        paginationButton.classList.add('Active');

       const currentPage = paginationButton.dataset.page;
       this.setState({ activePage: currentPage ? currentPage : 1 });
       console.log('[currentPage]', currentPage);
       console.log('[activePage]', activePage);
    }

    render() {
        const { search, showModal, showProducts, activePage } = this.state;
        return (
            <div className="App">
                <Header 
                    search={search}
                    showModal={showModal}
                    onChange={this.onSearchHandler}
                    onClick={this.openModalHandler}
                    onSubmit={this.onSubmitHandler}
                />
                <Sidebar />
                <Main 
                    showProducts={showProducts}
                    onClick={this.toggleCategoryHandler}
                    changePage={this.onChangePageHandler}
                    activePage={activePage}
                    />
                    
                <Footer />
            </div>
        );
    }
}

export default App;

