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
        showModal: false
    }

    componentDidMount() {
        // productsData.map((productData, i) => {
                
        //     console.log('[productData]', productData);
        //     return <Product key={i} {...productData} />
        // });
    }
    
    onSearchHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

        // console.log('[e.target.value]', e.target.value);
        // console.log('[value]', value);
    }

    toggleCategoryHandler = (e) => {
        // console.log('[e.target]', e.target);
        const button = e.target;
        const categories = button.parentElement.children;
        for (const categoryBtn of categories) {
            categoryBtn.classList.remove('Active');
        }

        button.classList.add('Active');
    }

    openModalHandler = () => {
        this.setState({ showModal: true });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
    }

    render() {
        const { search, showModal } = this.state;
        // console.log('[search]', search);
        // console.log('[showModal]', showModal);
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
                <Main onClick={this.toggleCategoryHandler}/>
                <Footer />
            </div>
        );
    }
}

export default App;

