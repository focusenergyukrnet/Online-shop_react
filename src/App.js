import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Header from './containers/Header/Header';
import Sidebar from './containers/Sidebar/Sidebar';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';

import './App.scss';

class App extends Component {
    state = {
        search: '',
        showModal: false,
        activeCategory: null,
        activePage: null
    }
    
    openModalHandler = () => {
        this.setState({ showModal: true });
    }
    
    onSubmitHandler = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        if (/^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}$/i.test(email)) {
            console.log('Email is valid');
        }

        if (password.length > 6) {
            console.log('Password is valid');
        }

        axios.post('https://jsonplaceholder.typicode.com/users', {email, password})
            .then(res => console.log('[res]', res))
            .catch(err => console.log('[err]', err));
    }
    
    onSearchHandler = e => {
        if (e.key !== 'Enter') return;
        this.setState({ search: e.target.value ? e.target.value : null });
    }
    
    toggleCategoryHandler = (e) => {
        const button = e.target;
        const categories = button.parentElement.children;
        for (const categoryBtn of categories) {
            categoryBtn.classList.remove('Active');
        }

        button.classList.add('Active');
        const currentCategory = button.dataset.category;
        
        this.setState({ 
            activeCategory: currentCategory, 
            activePage: 1
        });
        const pagination = document.querySelector('.Pagination');

        if (pagination) {
            for (const button of pagination.children) {
                button.classList.remove('Active')
            }
            pagination.firstElementChild.classList.add('Active');
        }
    }

    onChangePageHandler = (e) => {
        const paginationButton = e.target;

        if (!paginationButton.classList.contains('PaginationButton')) return;
        for (const button of paginationButton.parentElement.children) {
            button.classList.remove('Active');
        }
        paginationButton.classList.add('Active');
       const currentPage = paginationButton.dataset.page;
       
       this.setState({ activePage: currentPage ? currentPage : 1 });
    }

    onLoadHandler = (e) => {
        const image = e.target;
        image.hidden = true;
        image.nextElementSibling.hidden = false;

        setTimeout(() => {
            image.hidden = false;

            image.nextElementSibling.hidden = true;
        }, 1000)
    }

    toggleDropdownHanler = (e) => {
        const dropdownHeader = e.target.closest('.DropdownHeader');
        const dropdownBody = dropdownHeader.nextElementSibling;
        dropdownHeader.classList.toggle('Closed');

        if (dropdownHeader.classList.contains('Closed')) {
            for (const option of dropdownBody.children) {
                option.style.left = '-100vw';
            } 
        } else {
            for (const option of dropdownBody.children) {
                option.style.left = 0;
            }
        }
    }

    toggleOptionIconHandler = (e) => {
        const dropdownOption = e.target.closest('.DropdownOption');
        if (!dropdownOption) return;
        const icon = dropdownOption.firstElementChild;
        if (icon.classList.contains('fa-check-square')) {
            icon.classList.remove('fa-check-square');
            icon.classList.add('fa-square');
        } else {
            icon.classList.remove('fa-square');
            icon.classList.add('fa-check-square');
        }
    }

    render() {
        const { 
            search, 
            showModal, 
            activeCategory, 
            activePage
        } = this.state;

        return (
            <div className="App">
                <Header 
                    search={search}
                    showModal={showModal}
                    onKeyDown={this.onSearchHandler}
                    onClick={this.openModalHandler}
                    onSubmit={this.onSubmitHandler}
                />
                <Sidebar 
                    toggleDropdown={this.toggleDropdownHanler}
                    toggleOptionIcon={this.toggleOptionIconHandler} 
                    activeCategory={activeCategory}
                />
                <Main 
                    activePage={activePage}
                    search={search}
                    activeCategory={activeCategory}
                    onLoad={this.onLoadHandler}                    
                    onClick={this.toggleCategoryHandler}
                    changePage={this.onChangePageHandler}
                />
                    
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    onKeyDown : PropTypes.func,
    onClick : PropTypes.func,
    onSubmit : PropTypes.func,
    toggleDropdown : PropTypes.func,
    toggleOptionIcon : PropTypes.func,
    onLoad : PropTypes.func,
    changePage : PropTypes.func
};

export default App;

