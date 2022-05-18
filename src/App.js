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

// import productsData from './components/assets/database/products.json';
// import Products from './components/Products/Products';
// import Product from './components/Products/Product/Product';
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
        // showProducts: false,
        activeCategory: null,
        activePage: null
    }

    componentDidMount() {
        // this.setState({ showProducts: true });
    }
    
    onSearchHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

        // console.log('[e.target.value]', e.target.value);
        // console.log('[value]', value);
    }
    
    openModalHandler = () => {
        this.setState({ showModal: true });
    }
    
    onSubmitHandler = (e) => {
        e.preventDefault();
    }
    
    toggleCategoryHandler = (e) => {
        // console.log('[e.target]', e.target);
        const button = e.target;
        const categories = button.parentElement.children;
        for (const categoryBtn of categories) {
            categoryBtn.classList.remove('Active');
        }

        button.classList.add('Active');
        // console.log('[button]', button);
        const currentCategory = button.dataset.category;
        // console.log('[currentCategory]', currentCategory);
        this.setState({ 
            activeCategory: currentCategory, 
            activePage: 1 
        });
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
    }

    onLoadHandler = (e) => {
        // console.log('[e.target]', e.target);
        const image = e.target;
        image.hidden = true;
        image.nextElementSibling.hidden = false;

        setTimeout(() => {
            image.hidden = false;

            image.nextElementSibling.hidden = true;
        }, 1000)
    }

    toggleDropdownHanler = (e) => {
        console.log('[e.target]', e.target);
        const dropdown = e.target.closest('.Dropdown');

        // dropdownHeader.toggle.classList('Opened');
        dropdown.classList.toggle('Opened');
    }

    toggleOptionIconHandler = (e) => {
        const dropdownOption = e.target.closest('.DropdownOption');
        if (!dropdownOption) return;
        // console.log('[dropdownOption]', dropdownOption);
        const icon = dropdownOption.firstElementChild;
        // console.log('[icon]', icon);
        if (icon.classList.contains('fa-check-square')) {
            icon.classList.remove('fa-check-square');
            icon.classList.add('fa-square');
        } else {
            icon.classList.remove('fa-square');
            icon.classList.add('fa-check-square');
        }
    }

    render() {
        const { search, showModal, activeCategory, activePage } = this.state;
        return (
            <div className="App">
                <Header 
                    search={search}
                    showModal={showModal}
                    onChange={this.onSearchHandler}
                    onClick={this.openModalHandler}
                    onSubmit={this.onSubmitHandler}
                />
                <Sidebar 
                    toggleDropdown={this.toggleDropdownHanler}
                    toggleOptionIcon={this.toggleOptionIconHandler} 
                    activeCategory={activeCategory}
                />
                <Main 
                    // showProducts={showProducts}
                    onClick={this.toggleCategoryHandler}
                    changePage={this.onChangePageHandler}
                    onLoad={this.onLoadHandler}                    activeCategory={activeCategory}
                    activePage={activePage}
                    />
                    
                <Footer />
            </div>
        );
    }
}

export default App;

