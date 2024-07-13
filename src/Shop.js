import React from 'react';
import ShopCategory from './components/ShopCategory'
import Search from './components/Search'

const Shop = () => {
    return (
        <div className='shop'>
            <div className="fixed-top" style={{ marginLeft: '1rem', marginTop: '105px', marginBottom: '100px' }}>
                <Search page='Shop' />
            </div>

            <div style={{ marginTop: '20px', marginBottom: '40px', padding: '20px' }}>
                <ShopCategory category="Shop" />
                <ShopCategory category="Shop" />
                <ShopCategory category="Shop" />
                <ShopCategory category="Shop" />
                <ShopCategory category="Shop" />
                <ShopCategory category="Shop" />
                <ShopCategory category="Shop" />
                <ShopCategory category="Shop" />
            </div>
        </div>
    );
}

export default Shop;