import React, { useState } from 'react';
import './Filter.css';

const artists = [
  "Emily Carr", "Tom Thomson", "Lawren Harris", "A.Y. Jackson", "Arthur Lismer",
  "Frederick Varley", "J.E.H. MacDonald", "Claude Monet", "Pablo Picasso",
  "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo", "Rembrandt",
  "Andy Warhol", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe",
  "Jackson Pollock", "Henri Matisse", "Edgar Degas"
];

const DiscoverFilter = () => {
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

  const locationsList = [
    "Victoria, British Columbia",
    "Toronto, Ontario",
    "Brantford, Ontario",
    "Montreal, Quebec",
    "Vancouver, British Columbia",
    "Calgary, Alberta",
    "Edmonton, Alberta",
    "Ottawa, Ontario",
    "Quebec City, Quebec",
    "Winnipeg, Manitoba",
    "Halifax, Nova Scotia",
    "St. John's, Newfoundland and Labrador",
    "Regina, Saskatchewan",
    "Saskatoon, Saskatchewan",
    "Charlottetown, Prince Edward Island"
  ];

  const [location, setLocation] = useState("");
  const [artist, setArtist] = useState("");
  const [artist1, setArtist1] = useState("");
  const [artist2, setArtist2] = useState("");

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  }

  const handleArtist1Change = (event) => {
    setArtist1(event.target.value);
  }

  const handleArtist2Change = (event) => {
    setArtist2(event.target.value);
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }

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
      {/* Artwork Filters */}
      <div className="facet-category">
        <h4 className="category-title">Artwork</h4>
        
        <div className="filter-option">
          <label>Medium</label>
          <div className="option">
            <input type="radio" id="medium-all" name="medium" value="all" checked={filters.medium === 'all'} onChange={handleRadioChange} />
            <label htmlFor="medium-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="medium-digital" name="medium" value="digital" checked={filters.medium === 'digital'} onChange={handleRadioChange} />
            <label htmlFor="medium-digital">Digital</label>
          </div>
          <div className="option">
            <input type="radio" id="medium-painting" name="medium" value="painting" checked={filters.medium === 'painting'} onChange={handleRadioChange} />
            <label htmlFor="medium-painting">Painting</label>
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
            <label htmlFor="style-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="style-abstract" name="style" value="abstract" checked={filters.style === 'abstract'} onChange={handleRadioChange} />
            <label htmlFor="style-abstract">Abstract</label>
          </div>
          <div className="option">
            <input type="radio" id="style-realism" name="style" value="realism" checked={filters.style === 'realism'} onChange={handleRadioChange} />
            <label htmlFor="style-realism">Realism</label>
          </div>
        </div>

        <div className="filter-option">
          <label htmlFor="creation-date">Creation Date</label>
          <input type="date" id="creation-date" name="creationDate" value={filters.creationDate} onChange={handleInputChange} />
        </div>

        <div className="filter-option">
          <label htmlFor="artist">Artist</label>
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

        <div className="filter-option">
          <label>Popular Artists</label>
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

      {/* Music Filters */}
      <div className="facet-category">
        <h4 className="category-title">Music</h4>
        
        <div className="filter-option">
          <label>Genre</label>
          <div className="option">
            <input type="radio" id="genre-all" name="musicGenre" value="all" checked={filters.musicGenre === 'all'} onChange={handleRadioChange} />
            <label htmlFor="genre-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="genre-classical" name="musicGenre" value="classical" checked={filters.musicGenre === 'classical'} onChange={handleRadioChange} />
            <label htmlFor="genre-classical">Classical</label>
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
          <label htmlFor="music-creation-date">Creation Date</label>
          <input type="date" id="music-creation-date" name="musicCreationDate" value={filters.musicCreationDate} onChange={handleInputChange} />
        </div>

        <div className="filter-option">
          <label htmlFor="music-artist">Artist</label>
          <input type="text" id="music-artist" name="musicArtist" value={artist1} onChange={handleArtist1Change} placeholder="Artist Name" />
        </div>
        <div className='dropdown'>
          {artistsList.filter(item => {
            const name = artist1.toLowerCase();
            const allArtistsMatch = item.toLowerCase(); 

            return name && allArtistsMatch.includes(name) && allArtistsMatch !== name;
          })
          .map((item) =>(
            <div onClick={() => setArtist1(item)}className='dropdown-row'>{item}</div>
          ))}
        </div>

        <div className="filter-option">
          <label>Popular Artists</label>
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
            <input type="checkbox" id="artist-hendrix" name="popularMusicArtists" value="Hendrix" checked={filters.popularMusicArtists.includes('Hendrix')} onChange={handleCheckboxChange} />
            <label htmlFor="artist-hendrix">Jimi Hendrix</label>
          </div>
          <div className="option">
            <input type="checkbox" id="artist-beatles" name="popularMusicArtists" value="Beatles" checked={filters.popularMusicArtists.includes('Beatles')} onChange={handleCheckboxChange} />
            <label htmlFor="artist-beatles">The Beatles</label>
          </div>
        </div>
      </div>

      {/* Artist Filters */}
      <div className="facet-category">
        <h4 className="category-title">Artist</h4>
        
        <div className="filter-option">
          <label htmlFor="artist-name">Name</label>
          <input type="text" id="artist-name" name="artistName" value={artist2} onChange={handleArtist2Change} placeholder="Artist Name" />
        </div>
        <div className='dropdown'>
          {artistsList.filter(item => {
            const name = artist2.toLowerCase();
            const allArtistsMatch = item.toLowerCase(); 

            return name && allArtistsMatch.includes(name) && allArtistsMatch !== name;
          })
          .map((item) =>(
            <div onClick={() => setArtist2(item)}className='dropdown-row'>{item}</div>
          ))}
        </div>

        <div className="filter-option">
          <label>Style</label>
          <div className="option">
            <input type="radio" id="artist-style-all" name="artistStyle" value="all" checked={filters.artistStyle === 'all'} onChange={handleRadioChange} />
            <label htmlFor="artist-style-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="artist-style-abstract" name="artistStyle" value="abstract" checked={filters.artistStyle === 'abstract'} onChange={handleRadioChange} />
            <label htmlFor="artist-style-abstract">Abstract</label>
          </div>
          <div className="option">
            <input type="radio" id="artist-style-realism" name="artistStyle" value="realism" checked={filters.artistStyle === 'realism'} onChange={handleRadioChange} />
            <label htmlFor="artist-style-realism">Realism</label>
          </div>
        </div>

        <div className="filter-option">
          <label>Medium</label>
          <div className="option">
            <input type="radio" id="artist-medium-all" name="artistMedium" value="all" checked={filters.artistMedium === 'all'} onChange={handleRadioChange} />
            <label htmlFor="artist-medium-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="artist-medium-digital" name="artistMedium" value="digital" checked={filters.artistMedium === 'digital'} onChange={handleRadioChange} />
            <label htmlFor="artist-medium-digital">Digital</label>
          </div>
          <div className="option">
            <input type="radio" id="artist-medium-painting" name="artistMedium" value="painting" checked={filters.artistMedium === 'painting'} onChange={handleRadioChange} />
            <label htmlFor="artist-medium-painting">Painting</label>
          </div>
          <div className="option">
            <input type="radio" id="artist-medium-sculpture" name="artistMedium" value="sculpture" checked={filters.artistMedium === 'sculpture'} onChange={handleRadioChange} />
            <label htmlFor="artist-medium-sculpture">Sculpture</label>
          </div>
        </div>

        <div className="filter-option">
          <label htmlFor="artist-popularity">Popularity</label>
          <input type="number" id="artist-popularity" name="artistPopularity" min='0' value={filters.artistPopularity} onChange={handleInputChange} placeholder="Min. Likes" />
        </div>
      </div>

      {/* Event Filters */}
      <div className="facet-category">
        <h4 className="category-title">Event</h4>
        
        <div className="filter-option">
          <label>Date</label>
          <input type="date" id="event-date" name="eventDate" value={filters.eventDate} onChange={handleInputChange} />
        </div>

        <div className="filter-option">
          <label htmlFor="event-location">Location</label>
          <input type="text" id="event-location" name="eventLocation" value={location} onChange={handleLocationChange} placeholder="Location" />
        </div>
        <div className='dropdown'>
          {locationsList.filter(item => {
            const name = location.toLowerCase();
            const allLocationsMatch = item.toLowerCase(); 

            return name && allLocationsMatch.includes(name) && allLocationsMatch !== name;
          })
          .map((item) =>(
            <div onClick={() => setLocation(item)}className='dropdown-row'>{item}</div>
          ))}
        </div>

        <div className="filter-option">
          <label>Type</label>
          <div className="option">
            <input type="radio" id="event-type-all" name="eventType" value="all" checked={filters.eventType === 'all'} onChange={handleRadioChange} />
            <label htmlFor="event-type-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="event-type-exhibition" name="eventType" value="exhibition" checked={filters.eventType === 'exhibition'} onChange={handleRadioChange} />
            <label htmlFor="event-type-exhibition">Exhibition</label>
          </div>
          <div className="option">
            <input type="radio" id="event-type-workshop" name="eventType" value="workshop" checked={filters.eventType === 'workshop'} onChange={handleRadioChange} />
            <label htmlFor="event-type-workshop">Workshop</label>
          </div>
        </div>
      </div>

      {/* Community Post Filters */}
      <div className="facet-category">
        <h4 className="category-title">Community Post</h4>
        
        <div className="filter-option">
          <label>Community</label>
          <div className="option">
            <input type="radio" id="community-all" name="community" value="all" checked={filters.community === 'all'} onChange={handleRadioChange} />
            <label htmlFor="community-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="community-general" name="community" value="general" checked={filters.community === 'general'} onChange={handleRadioChange} />
            <label htmlFor="community-general">General</label>
          </div>
          <div className="option">
            <input type="radio" id="community-techniques" name="community" value="techniques" checked={filters.community === 'techniques'} onChange={handleRadioChange} />
            <label htmlFor="community-techniques">Techniques</label>
          </div>
          <div className="option">
            <input type="radio" id="community-critique" name="community" value="critique" checked={filters.community === 'critique'} onChange={handleRadioChange} />
            <label htmlFor="community-critique">Critique</label>
          </div>
          <div className="option">
            <input type="radio" id="community-events" name="community" value="events" checked={filters.community === 'events'} onChange={handleRadioChange} />
            <label htmlFor="community-events">Events</label>
          </div>
        </div>

        <div className="filter-option">
          <label htmlFor="post-date">Date</label>
          <input type="date" id="post-date" name="postDate" value={filters.postDate} onChange={handleInputChange} />
        </div>

        <div className="filter-option">
          <label htmlFor="post-popularity">Popularity</label>
          <input type="number" id="post-popularity" name="postPopularity" min='0' value={filters.postPopularity} onChange={handleInputChange} placeholder="Min. Likes" />
        </div>
      </div>

      {/* Search Button */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary search" onClick={resetFilters}>Reset</button>
        <button className="btn btn-primary search" onClick={() => {window.location = '/artconnect/searchResult'}}>Search</button>
      </div>
    </div>
  );
};

export default DiscoverFilter;
