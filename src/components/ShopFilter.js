import React, { useState } from 'react';
import './Filter.css';
const ShopFilter = () => {
    const initialFilters = {
      medium: 'all',
      style: 'all',
      priceMin: '',
      priceMax: '',
      size: 'all',
      artist: ''
    };

    const artistsList = [
      "Emily Carr",
      "Tom Thomson",
      "Lawren Harris",
      "A.Y. Jackson",
      "Arthur Lismer",
      "Frederick Varley",
      "J.E.H. MacDonald",
      "Claude Monet",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Michelangelo",
      "Rembrandt",
      "Andy Warhol",
      "Salvador Dalí",
      "Frida Kahlo",
      "Georgia O'Keeffe",
      "Jackson Pollock",
      "Henri Matisse",
      "Edgar Degas"
    ]; 
  
    const [artworkFilters, setArtworkFilters] = useState(initialFilters);
    const [artist, setArtist] = useState("");

    const handleArtistChange = (event) => {
      setArtist(event.target.value);
    }
  
    const handleArtworkInputChange = (event) => {
      const { name, value } = event.target;
      setArtworkFilters({
        ...artworkFilters,
        [name]: value
      });
    };
  
    const handleArtworkRadioChange = (event) => {
      const { name, value } = event.target;
      setArtworkFilters({
        ...artworkFilters,
        [name]: value
      });
    };
  
    const resetFilters = () => {
      setArtworkFilters(initialFilters);
    };
  
    return (
      <div className="faceted-search-sidebar">

        {/* Artwork Filters */}
        <div className="facet-category">
          <h4 className="category-title">Artwork</h4>
  
          <div className="filter-option">
            <label>Medium</label>
            <div className="option">
              <input type="radio" id="medium-all" name="medium" value="all" checked={artworkFilters.medium === 'all'} onChange={handleArtworkRadioChange} />
              <label htmlFor="medium-all">All</label>
            </div>
            <div className="option">
              <input type="radio" id="medium-digital" name="medium" value="digital" checked={artworkFilters.medium === 'digital'} onChange={handleArtworkRadioChange} />
              <label htmlFor="medium-digital">Digital</label>
            </div>
            <div className="option">
              <input type="radio" id="medium-painting" name="medium" value="painting" checked={artworkFilters.medium === 'painting'} onChange={handleArtworkRadioChange} />
              <label htmlFor="medium-painting">Painting</label>
            </div>
            <div className="option">
              <input type="radio" id="medium-sculpture" name="medium" value="sculpture" checked={artworkFilters.medium === 'sculpture'} onChange={handleArtworkRadioChange} />
              <label htmlFor="medium-sculpture">Sculpture</label>
            </div>
            <div className="option">
              <input type="radio" id="medium-photography" name="medium" value="photography" checked={artworkFilters.medium === 'photography'} onChange={handleArtworkRadioChange} />
              <label htmlFor="medium-photography">Photography</label>
            </div>
          </div>
  
          <div className="filter-option">
            <label>Style</label>
            <div className="option">
              <input type="radio" id="style-all" name="style" value="all" checked={artworkFilters.style === 'all'} onChange={handleArtworkRadioChange} />
              <label htmlFor="style-all">All</label>
            </div>
            <div className="option">
              <input type="radio" id="style-abstract" name="style" value="abstract" checked={artworkFilters.style === 'abstract'} onChange={handleArtworkRadioChange} />
              <label htmlFor="style-abstract">Abstract</label>
            </div>
            <div className="option">
              <input type="radio" id="style-realism" name="style" value="realism" checked={artworkFilters.style === 'realism'} onChange={handleArtworkRadioChange} />
              <label htmlFor="style-realism">Realism</label>
            </div>
            <div className="option">
              <input type="radio" id="style-impressionism" name="style" value="impressionism" checked={artworkFilters.style === 'impressionism'} onChange={handleArtworkRadioChange} />
              <label htmlFor="style-impressionism">Impressionism</label>
            </div>
          </div>
  
          <div className="filter-option">
            <label>Price Range</label>
            <input type="number" id="price-min" name="priceMin" value={artworkFilters.priceMin} onChange={handleArtworkInputChange} placeholder="Min Price" />
            <input type="number" id="price-max" name="priceMax" value={artworkFilters.priceMax} onChange={handleArtworkInputChange} placeholder="Max Price" />
          </div>
  
          <div className="filter-option">
            <label>Size</label>
            <div className="option">
              <input type="radio" id="size-all" name="size" value="all" checked={artworkFilters.size === 'all'} onChange={handleArtworkRadioChange} />
              <label htmlFor="size-all">All</label>
            </div>
            <div className="option">
              <input type="radio" id="size-small" name="size" value="small" checked={artworkFilters.size === 'small'} onChange={handleArtworkRadioChange} />
              <label htmlFor="size-small">Small</label>
            </div>
            <div className="option">
              <input type="radio" id="size-medium" name="size" value="medium" checked={artworkFilters.size === 'medium'} onChange={handleArtworkRadioChange} />
              <label htmlFor="size-medium">Medium</label>
            </div>
            <div className="option">
              <input type="radio" id="size-large" name="size" value="large" checked={artworkFilters.size === 'large'} onChange={handleArtworkRadioChange} />
              <label htmlFor="size-large">Large</label>
            </div>
          </div>
  
          <div className="filter-option">
            <label>Artist</label>
            <input type="text" id="artist" name="artist" value={artist} onChange={handleArtistChange} placeholder="Artist Name" />
          </div>
          <div className='dropdown'>
            {artistsList.filter(item => {
              const name = artist.toLowerCase();
              const allArtistsMatch = item.toLowerCase(); 

              return name && allArtistsMatch.includes(name) && allArtistsMatch !== name;
            })
            .map((item) =>(
              <div onClick={() => setArtist(item)}className='dropdown-row'>{item}</div>
            ))}
          </div>
        </div>
  
        <div className='d-flex justify-content-end'>
          <button className='btn btn-primary search' onClick={resetFilters}>Reset</button>
          <button className='btn btn-primary search' onClick={() => {window.location = '/artconnect/searchResult'}}>Search</button>
        </div>
      </div>
    );
  };
 
export default ShopFilter;