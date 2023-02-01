import React, { Component } from 'react';
import "./header.css"

class Search extends Component {
    render() {
        return (
            <nav>
                <div className='search'>
                    <div className='input'>
                        <input type="search" placeholder="Search" />
                        <button>Cari</button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Search;