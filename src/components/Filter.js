import React from 'react';
import './Filter.css';

function Filter() {
  return (
    <div className="faceted-search-sidebar">

      {/* Artwork Filters */}
      <div className="facet-category">
        <h4 className="category-title">Artwork</h4>
        
        <div className="filter-option">
          <label>Medium</label>
          <div className="option">
            <input type="radio" id="medium-all" name="medium" value="all" defaultChecked />
            <label htmlFor="medium-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="medium-digital" name="medium" value="digital" />
            <label htmlFor="medium-digital">Digital</label>
          </div>
          <div className="option">
            <input type="radio" id="medium-painting" name="medium" value="painting" />
            <label htmlFor="medium-painting">Painting</label>
          </div>
          <div className="option">
            <input type="radio" id="medium-sculpture" name="medium" value="sculpture" />
            <label htmlFor="medium-sculpture">Sculpture</label>
          </div>
        </div>

        <div className="filter-option">
          <label>Style</label>
          <div className="option">
            <input type="radio" id="style-all" name="style" value="all" defaultChecked />
            <label htmlFor="style-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="style-abstract" name="style" value="abstract" />
            <label htmlFor="style-abstract">Abstract</label>
          </div>
          <div className="option">
            <input type="radio" id="style-realism" name="style" value="realism" />
            <label htmlFor="style-realism">Realism</label>
          </div>
        </div>

        <div className="filter-option">
          <label htmlFor="creation-date">Creation Date</label>
          <input type="date" id="creation-date" name="creation-date" />
        </div>

        <div className="filter-option">
          <label htmlFor="artist">Artist</label>
          <input type="text" id="artist" name="artist" placeholder="Artist Name" />
        </div>

        <div className="filter-option">
          <label>Popular Artists</label>
          <div className="option">
            <input type="checkbox" id="artist-monet" name="artist-popular" value="Monet" />
            <label htmlFor="artist-monet">Claude Monet</label>
          </div>
          <div className="option">
            <input type="checkbox" id="artist-picasso" name="artist-popular" value="Picasso" />
            <label htmlFor="artist-picasso">Pablo Picasso</label>
          </div>
          <div className="option">
            <input type="checkbox" id="artist-davinci" name="artist-popular" value="Davinci" />
            <label htmlFor="artist-davinci">Leonardo da Vinci</label>
          </div>
          <div className="option">
            <input type="checkbox" id="artist-vangogh" name="artist-popular" value="VanGogh" />
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
            <input type="radio" id="genre-all" name="genre" value="all" defaultChecked />
            <label htmlFor="genre-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="genre-classical" name="genre" value="classical" />
            <label htmlFor="genre-classical">Classical</label>
          </div>
          <div className="option">
            <input type="radio" id="genre-jazz" name="genre" value="jazz" />
            <label htmlFor="genre-jazz">Jazz</label>
          </div>
          <div className="option">
            <input type="radio" id="genre-rock" name="genre" value="rock" />
            <label htmlFor="genre-rock">Rock</label>
          </div>
        </div>

        <div className="filter-option">
          <label htmlFor="music-creation-date">Creation Date</label>
          <input type="date" id="music-creation-date" name="music-creation-date" />
        </div>

        <div className="filter-option">
          <label htmlFor="music-artist">Artist</label>
          <input type="text" id="music-artist" name="music-artist" placeholder="Artist Name" />
        </div>

        <div className="filter-option">
          <label>Popular Artists</label>
          <div className="option">
            <input type="checkbox" id="artist-beethoven" name="music-artist-popular" value="Beethoven" />
            <label htmlFor="artist-beethoven">Ludwig van Beethoven</label>
          </div>
          <div className="option">
            <input type="checkbox" id="artist-ellajazz" name="music-artist-popular" value="EllaJazz" />
            <label htmlFor="artist-ellajazz">Ella Fitzgerald</label>
          </div>
          <div className="option">
            <input type="checkbox" id="artist-hendrix" name="music-artist-popular" value="Hendrix" />
            <label htmlFor="artist-hendrix">Jimi Hendrix</label>
          </div>
          <div className="option">
            <input type="checkbox" id="artist-beatles" name="music-artist-popular" value="Beatles" />
            <label htmlFor="artist-beatles">The Beatles</label>
          </div>
        </div>
      </div>

      {/* Artist Filters */}
      <div className="facet-category">
        <h4 className="category-title">Artist</h4>
        
        <div className="filter-option">
          <label htmlFor="artist-name">Name</label>
          <input type="text" id="artist-name" name="artist-name" placeholder="Artist Name" />
        </div>

        <div className="filter-option">
          <label>Style</label>
          <div className="option">
            <input type="radio" id="artist-style-all" name="artist-style" value="all" defaultChecked />
            <label htmlFor="artist-style-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="artist-style-abstract" name="artist-style" value="abstract" />
            <label htmlFor="artist-style-abstract">Abstract</label>
          </div>
          <div className="option">
            <input type="radio" id="artist-style-realism" name="artist-style" value="realism" />
            <label htmlFor="artist-style-realism">Realism</label>
          </div>
        </div>

        <div className="filter-option">
          <label>Medium</label>
          <div className="option">
            <input type="radio" id="artist-medium-all" name="artist-medium" value="all" defaultChecked />
            <label htmlFor="artist-medium-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="artist-medium-digital" name="artist-medium" value="digital" />
            <label htmlFor="artist-medium-digital">Digital</label>
          </div>
          <div className="option">
            <input type="radio" id="artist-medium-painting" name="artist-medium" value="painting" />
            <label htmlFor="artist-medium-painting">Painting</label>
          </div>
          <div className="option">
            <input type="radio" id="artist-medium-sculpture" name="artist-medium" value="sculpture" />
            <label htmlFor="artist-medium-sculpture">Sculpture</label>
          </div>
        </div>

        <div className="filter-option">
          <label htmlFor="artist-popularity">Popularity</label>
          <input type="number" id="artist-popularity" name="artist-popularity" placeholder="Min. Likes" />
        </div>
      </div>

      {/* Event Filters */}
      <div className="facet-category">
        <h4 className="category-title">Event</h4>
        
        <div className="filter-option">
          <label>Date</label>
          <input type="date" id="event-date" name="event-date" />
        </div>

        <div className="filter-option">
          <label htmlFor="event-location">Location</label>
          <input type="text" id="event-location" name="event-location" placeholder="Location" />
        </div>

        <div className="filter-option">
          <label>Type</label>
          <div className="option">
            <input type="radio" id="event-type-all" name="event-type" value="all" defaultChecked />
            <label htmlFor="event-type-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="event-type-exhibition" name="event-type" value="exhibition" />
            <label htmlFor="event-type-exhibition">Exhibition</label>
          </div>
          <div className="option">
            <input type="radio" id="event-type-workshop" name="event-type" value="workshop" />
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
            <input type="radio" id="community-all" name="community" value="all" defaultChecked />
            <label htmlFor="community-all">All</label>
          </div>
          <div className="option">
            <input type="radio" id="community-general" name="community" value="general" />
            <label htmlFor="community-general">General</label>
          </div>
          <div className="option">
            <input type="radio" id="community-techniques" name="community" value="techniques" />
            <label htmlFor="community-techniques">Techniques</label>
          </div>
          <div className="option">
            <input type="radio" id="community-critique" name="community" value="critique" />
            <label htmlFor="community-critique">Critique</label>
          </div>
          <div className="option">
            <input type="radio" id="community-events" name="community" value="events" />
            <label htmlFor="community-events">Events</label>
          </div>
        </div>

        <div className="filter-option">
          <label htmlFor="post-date">Date</label>
          <input type="date" id="post-date" name="post-date" />
        </div>

        <div className="filter-option">
          <label htmlFor="post-popularity">Popularity</label>
          <input type="number" id="post-popularity" name="post-popularity" placeholder="Min. Likes" />
        </div>
      </div>
      <div className='d-flex justify-content-end'>
        <button className='btn btn-primary search'>Search</button>
      </div>
    </div>
  );
}

export default Filter;
