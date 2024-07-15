import React, { useState } from 'react';
import '../../components/Filter.css';

const FrenchDiscoverFilter = () => {
    const initialFilters = {
        medium: 'all',
        style: 'all',
        creationDate: '',
        artist: '',
        popularArtists: [],
        musicGenre: 'all',
        musicCreationDate: '',
        musicArtist: '',
        popularMusicArtists: [],
        artistName: '',
        artistStyle: 'all',
        artistMedium: 'all',
        artistPopularity: '',
        eventDate: '',
        eventLocation: '',
        eventType: 'all',
        community: 'all',
        postDate: '',
        postPopularity: ''
      };
      
      const [filters, setFilters] = useState(initialFilters);
      
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFilters({
          ...filters,
          [name]: value
        });
      };
      
      const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;
        if (name === 'popularArtists') {
          let updatedPopularArtists = [...filters.popularArtists];
      
          if (checked) {
            updatedPopularArtists.push(value);
          } else {
            updatedPopularArtists = updatedPopularArtists.filter(artist => artist !== value);
          }
      
          setFilters({
            ...filters,
            popularArtists: updatedPopularArtists
          });
        } else if (name === 'popularMusicArtists') {
          let updatedPopularMusicArtists = [...filters.popularMusicArtists];
      
          if (checked) {
            updatedPopularMusicArtists.push(value);
          } else {
            updatedPopularMusicArtists = updatedPopularMusicArtists.filter(artist => artist !== value);
          }
      
          setFilters({
            ...filters,
            popularMusicArtists: updatedPopularMusicArtists
          });
        }
      };
      
      const handleRadioChange = (event) => {
        const { name, value } = event.target;
        setFilters({
          ...filters,
          [name]: value
        });
      };
      
      const resetFilters = () => {
        setFilters(initialFilters);
      };
      
      const handleSubmit = () => {
        // Implement logic to apply filters
      };
      
      return (
        <div className="faceted-search-sidebar">
          {/* Filtres des œuvres d'art */}
          <div className="facet-category">
            <h4 className="category-title">Œuvres d'art</h4>
            
            <div className="filter-option">
              <label>Médium</label>
              <div className="option">
                <input type="radio" id="medium-all" name="medium" value="all" checked={filters.medium === 'all'} onChange={handleRadioChange} />
                <label htmlFor="medium-all">Tout</label>
              </div>
              <div className="option">
                <input type="radio" id="medium-digital" name="medium" value="digital" checked={filters.medium === 'digital'} onChange={handleRadioChange} />
                <label htmlFor="medium-digital">Digital</label>
              </div>
              <div className="option">
                <input type="radio" id="medium-painting" name="medium" value="painting" checked={filters.medium === 'painting'} onChange={handleRadioChange} />
                <label htmlFor="medium-painting">Peinture</label>
              </div>
              <div className="option">
                <input type="radio" id="medium-sculpture" name="medium" value="sculpture" checked={filters.medium === 'sculpture'} onChange={handleRadioChange} />
                <label htmlFor="medium-sculpture">Sculpture</label>
              </div>
            </div>
      
            <div className="filter-option">
              <label>Style</label>
              <div className="option">
                <input type="radio" id="style-all" name="style" value="all" checked={filters.style === 'all'} onChange={handleRadioChange} />
                <label htmlFor="style-all">Tout</label>
              </div>
              <div className="option">
                <input type="radio" id="style-abstract" name="style" value="abstract" checked={filters.style === 'abstract'} onChange={handleRadioChange} />
                <label htmlFor="style-abstract">Abstrait</label>
              </div>
              <div className="option">
                <input type="radio" id="style-realism" name="style" value="realism" checked={filters.style === 'realism'} onChange={handleRadioChange} />
                <label htmlFor="style-realism">Réalisme</label>
              </div>
            </div>
      
            <div className="filter-option">
              <label htmlFor="creation-date">Date de création</label>
              <input type="date" id="creation-date" name="creationDate" value={filters.creationDate} onChange={handleInputChange} />
            </div>
      
            <div className="filter-option">
              <label htmlFor="artist">Artiste</label>
              <input type="text" id="artist" name="artist" value={filters.artist} onChange={handleInputChange} placeholder="Nom de l'artiste" />
            </div>
      
            <div className="filter-option">
              <label>Artistes populaires</label>
              <div className="option">
                <input type="checkbox" id="artist-monet" name="popularArtists" value="Monet" checked={filters.popularArtists.includes('Monet')} onChange={handleCheckboxChange} />
                <label htmlFor="artist-monet">Claude Monet</label>
              </div>
              <div className="option">
                <input type="checkbox" id="artist-picasso" name="popularArtists" value="Picasso" checked={filters.popularArtists.includes('Picasso')} onChange={handleCheckboxChange} />
                <label htmlFor="artist-picasso">Pablo Picasso</label>
              </div>
              <div className="option">
                <input type="checkbox" id="artist-davinci" name="popularArtists" value="Davinci" checked={filters.popularArtists.includes('Davinci')} onChange={handleCheckboxChange} />
                <label htmlFor="artist-davinci">Leonardo da Vinci</label>
              </div>
              <div className="option">
                <input type="checkbox" id="artist-vangogh" name="popularArtists" value="VanGogh" checked={filters.popularArtists.includes('VanGogh')} onChange={handleCheckboxChange} />
                <label htmlFor="artist-vangogh">Vincent van Gogh</label>
              </div>
            </div>
          </div>
      
          {/* Filtres de musique */}
          <div className="facet-category">
            <h4 className="category-title">Musique</h4>
            
            <div className="filter-option">
              <label>Genre</label>
              <div className="option">
                <input type="radio" id="genre-all" name="musicGenre" value="all" checked={filters.musicGenre === 'all'} onChange={handleRadioChange} />
                <label htmlFor="genre-all">Tout</label>
              </div>
              <div className="option">
                <input type="radio" id="genre-classical" name="musicGenre" value="classical" checked={filters.musicGenre === 'classical'} onChange={handleRadioChange} />
                <label htmlFor="genre-classical">Classique</label>
              </div>
              <div className="option">
                <input type="radio" id="genre-jazz" name="musicGenre" value="jazz" checked={filters.musicGenre === 'jazz'} onChange={handleRadioChange} />
                <label htmlFor="genre-jazz">Jazz</label>
              </div>
              <div className="option">
                <input type="radio" id="genre-rock" name="musicGenre" value="rock" checked={filters.musicGenre === 'rock'} onChange={handleRadioChange} />
                <label htmlFor="genre-rock">Rock</label>
              </div>
            </div>
      
            <div className="filter-option">
              <label htmlFor="music-creation-date">Date de création</label>
              <input type="date" id="music-creation-date" name="musicCreationDate" value={filters.musicCreationDate} onChange={handleInputChange} />
            </div>
      
            <div className="filter-option">
              <label htmlFor="music-artist">Artiste</label>
              <input type="text" id="music-artist" name="musicArtist" value={filters.musicArtist} onChange={handleInputChange} placeholder="Nom de l'artiste" />
            </div>
      
            <div className="filter-option">
              <label>Artistes populaires</label>
              <div className="option">
                <input type="checkbox" id="artist-beethoven" name="popularMusicArtists" value="Beethoven" checked={filters.popularMusicArtists.includes('Beethoven')} onChange={handleCheckboxChange} />
                <label htmlFor="artist-beethoven">Ludwig van Beethoven</label>
              </div>
              <div className="option">
                <input type="checkbox" id="artist-bach" name="popularMusicArtists" value="Bach" checked={filters.popularMusicArtists.includes('Bach')} onChange={handleCheckboxChange} />
                <label htmlFor="artist-bach">Johann Sebastian Bach</label>
              </div>
              <div className="option">
                <input type="checkbox" id="artist-mozart" name="popularMusicArtists" value="Mozart" checked={filters.popularMusicArtists.includes('Mozart')} onChange={handleCheckboxChange} />
                <label htmlFor="artist-mozart">Wolfgang Amadeus Mozart</label>
              </div>
              <div className="option">
                <input type="checkbox" id="artist-ellington" name="popularMusicArtists" value="Ellington" checked={filters.popularMusicArtists.includes('Ellington')} onChange={handleCheckboxChange} />
                <label htmlFor="artist-ellington">Duke Ellington</label>
              </div>
            </div>
          </div>
      
          {/* Filtres d'artistes */}
          <div className="facet-category">
            <h4 className="category-title">Artistes</h4>
            
            <div className="filter-option">
              <label htmlFor="artist-name">Nom</label>
              <input type="text" id="artist-name" name="artistName" value={filters.artistName} onChange={handleInputChange} placeholder="Nom de l'artiste" />
            </div>
      
            <div className="filter-option">
              <label>Style</label>
              <div className="option">
                <input type="radio" id="artist-style-all" name="artistStyle" value="all" checked={filters.artistStyle === 'all'} onChange={handleRadioChange} />
                <label htmlFor="artist-style-all">Tout</label>
              </div>
              <div className="option">
                <input type="radio" id="artist-style-abstract" name="artistStyle" value="abstract" checked={filters.artistStyle === 'abstract'} onChange={handleRadioChange} />
                <label htmlFor="artist-style-abstract">Abstrait</label>
              </div>
              <div className="option">
                <input type="radio" id="artist-style-realism" name="artistStyle" value="realism" checked={filters.artistStyle === 'realism'} onChange={handleRadioChange} />
                <label htmlFor="artist-style-realism">Réalisme</label>
              </div>
            </div>
      
            <div className="filter-option">
              <label>Médium</label>
              <div className="option">
                <input type="radio" id="artist-medium-all" name="artistMedium" value="all" checked={filters.artistMedium === 'all'} onChange={handleRadioChange} />
                <label htmlFor="artist-medium-all">Tout</label>
              </div>
              <div className="option">
                <input type="radio" id="artist-medium-digital" name="artistMedium" value="digital" checked={filters.artistMedium === 'digital'} onChange={handleRadioChange} />
                <label htmlFor="artist-medium-digital">Digital</label>
              </div>
              <div className="option">
                <input type="radio" id="artist-medium-painting" name="artistMedium" value="painting" checked={filters.artistMedium === 'painting'} onChange={handleRadioChange} />
                <label htmlFor="artist-medium-painting">Peinture</label>
              </div>
              <div className="option">
                <input type="radio" id="artist-medium-sculpture" name="artistMedium" value="sculpture" checked={filters.artistMedium === 'sculpture'} onChange={handleRadioChange} />
                <label htmlFor="artist-medium-sculpture">Sculpture</label>
              </div>
            </div>
      
            <div className="filter-option">
              <label>Popularité</label>
              <div className="option">
                <input type="radio" id="artist-popularity-all" name="artistPopularity" value="all" checked={filters.artistPopularity === 'all'} onChange={handleRadioChange} />
                <label htmlFor="artist-popularity-all">Tout</label>
              </div>
              <div className="option">
                <input type="radio" id="artist-popularity-high" name="artistPopularity" value="high" checked={filters.artistPopularity === 'high'} onChange={handleRadioChange} />
                <label htmlFor="artist-popularity-high">Élevée</label>
              </div>
              <div className="option">
                <input type="radio" id="artist-popularity-low" name="artistPopularity" value="low" checked={filters.artistPopularity === 'low'} onChange={handleRadioChange} />
                <label htmlFor="artist-popularity-low">Faible</label>
              </div>
            </div>
          </div>
      
          {/* Filtres d'événements */}
          <div className="facet-category">
            <h4 className="category-title">Événements</h4>
            
            <div className="filter-option">
              <label htmlFor="event-date">Date</label>
              <input type="date" id="event-date" name="eventDate" value={filters.eventDate} onChange={handleInputChange} />
            </div>
      
            <div className="filter-option">
              <label htmlFor="event-location">Lieu</label>
              <input type="text" id="event-location" name="eventLocation" value={filters.eventLocation} onChange={handleInputChange} placeholder="Lieu de l'événement" />
            </div>
      
            <div className="filter-option">
              <label>Type</label>
              <div className="option">
                <input type="radio" id="event-type-all" name="eventType" value="all" checked={filters.eventType === 'all'} onChange={handleRadioChange} />
                <label htmlFor="event-type-all">Tout</label>
              </div>
              <div className="option">
                <input type="radio" id="event-type-exhibition" name="eventType" value="exhibition" checked={filters.eventType === 'exhibition'} onChange={handleRadioChange} />
                <label htmlFor="event-type-exhibition">Exposition</label>
              </div>
              <div className="option">
                <input type="radio" id="event-type-concert" name="eventType" value="concert" checked={filters.eventType === 'concert'} onChange={handleRadioChange} />
                <label htmlFor="event-type-concert">Concert</label>
              </div>
              <div className="option">
                <input type="radio" id="event-type-workshop" name="eventType" value="workshop" checked={filters.eventType === 'workshop'} onChange={handleRadioChange} />
                <label htmlFor="event-type-workshop">Atelier</label>
              </div>
            </div>
          </div>
      
          {/* Filtres de la communauté */}
          <div className="facet-category">
            <h4 className="category-title">Communauté</h4>
            
            <div className="filter-option">
              <label htmlFor="community">Communauté</label>
              <input type="text" id="community" name="community" value={filters.community} onChange={handleInputChange} placeholder="Nom de la communauté" />
            </div>
      
            <div className="filter-option">
              <label htmlFor="post-date">Date du post</label>
              <input type="date" id="post-date" name="postDate" value={filters.postDate} onChange={handleInputChange} />
            </div>
      
            <div className="filter-option">
              <label>Popularité</label>
              <div className="option">
                <input type="radio" id="post-popularity-all" name="postPopularity" value="all" checked={filters.postPopularity === 'all'} onChange={handleRadioChange} />
                <label htmlFor="post-popularity-all">Tout</label>
              </div>
              <div className="option">
                <input type="radio" id="post-popularity-high" name="postPopularity" value="high" checked={filters.postPopularity === 'high'} onChange={handleRadioChange} />
                <label htmlFor="post-popularity-high">Élevée</label>
              </div>
              <div className="option">
                <input type="radio" id="post-popularity-low" name="postPopularity" value="low" checked={filters.postPopularity === 'low'} onChange={handleRadioChange} />
                <label htmlFor="post-popularity-low">Faible</label>
              </div>
            </div>
          </div>
      
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary search" type="button" onClick={resetFilters}>Réinitialiser</button>
            <button className="btn btn-primary search" type="button" onClick={handleSubmit}>Appliquer</button>
          </div>
        </div>
      );
      
}
 
export default FrenchDiscoverFilter;
