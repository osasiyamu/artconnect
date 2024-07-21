import React, { useState } from 'react';
import './Filter.css';
const CommunityFilter = () => {

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

    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    }

    const [filters, setFilters] = useState({
        communityType: 'all',
        location: '',
        size: 'all',
        activity: 'all',
        creationDate: ''
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFilters({
          ...filters,
          [name]: value
        });
      };
    
      const handleRadioChange = (event) => {
        const { name, value } = event.target;
        setFilters({
          ...filters,
          [name]: value
        });
      };
    
      const resetFilters = () => {
        setFilters({
          communityType: 'all',
          location: '',
          size: 'all',
          activity: 'all',
          creationDate: ''
        });
      };
    
      return (
        <div className="faceted-search-sidebar">
          <div className="facet-category">
            <h4 className="category-title">Community Filters</h4>
            
            <div className="filter-option">
              <label>Community Type</label>
              <div className="option">
                <input type="radio" id="community-type-all" name="communityType" value="all" checked={filters.communityType === 'all'} onChange={handleRadioChange} />
                <label htmlFor="community-type-all">All</label>
              </div>
              <div className="option">
                <input type="radio" id="community-type-hobbies" name="communityType" value="hobbies" checked={filters.communityType === 'hobbies'} onChange={handleRadioChange} />
                <label htmlFor="community-type-hobbies">Hobbies</label>
              </div>
              <div className="option">
                <input type="radio" id="community-type-professional" name="communityType" value="professional" checked={filters.communityType === 'professional'} onChange={handleRadioChange} />
                <label htmlFor="community-type-professional">Professional</label>
              </div>
              <div className="option">
                <input type="radio" id="community-type-support" name="communityType" value="support" checked={filters.communityType === 'support'} onChange={handleRadioChange} />
                <label htmlFor="community-type-support">Support</label>
              </div>
            </div>
            
            <div className="filter-option">
              <label htmlFor="community-location">Location</label>
              <input type="text" id="community-location" name="location" value={location} onChange={handleLocationChange} placeholder="City, State, or Country" />
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
              <label>Community Size</label>
              <div className="option">
                <input type="radio" id="size-all" name="size" value="all" checked={filters.size === 'all'} onChange={handleRadioChange} />
                <label htmlFor="size-all">All</label>
              </div>
              <div className="option">
                <input type="radio" id="size-small" name="size" value="small" checked={filters.size === 'small'} onChange={handleRadioChange} />
                <label htmlFor="size-small">Small (1-50 members)</label>
              </div>
              <div className="option">
                <input type="radio" id="size-medium" name="size" value="medium" checked={filters.size === 'medium'} onChange={handleRadioChange} />
                <label htmlFor="size-medium">Medium (51-200 members)</label>
              </div>
              <div className="option">
                <input type="radio" id="size-large" name="size" value="large" checked={filters.size === 'large'} onChange={handleRadioChange} />
                <label htmlFor="size-large">Large (200+ members)</label>
              </div>
            </div>
            
            <div className="filter-option">
              <label>Activity Level</label>
              <div className="option">
                <input type="radio" id="activity-all" name="activity" value="all" checked={filters.activity === 'all'} onChange={handleRadioChange} />
                <label htmlFor="activity-all">All</label>
              </div>
              <div className="option">
                <input type="radio" id="activity-low" name="activity" value="low" checked={filters.activity === 'low'} onChange={handleRadioChange} />
                <label htmlFor="activity-low">Low</label>
              </div>
              <div className="option">
                <input type="radio" id="activity-medium" name="activity" value="medium" checked={filters.activity === 'medium'} onChange={handleRadioChange} />
                <label htmlFor="activity-medium">Medium</label>
              </div>
              <div className="option">
                <input type="radio" id="activity-high" name="activity" value="high" checked={filters.activity === 'high'} onChange={handleRadioChange} />
                <label htmlFor="activity-high">High</label>
              </div>
            </div>
    
            <div className="filter-option">
              <label htmlFor="community-creation-date">Creation Date</label>
              <input type="date" id="community-creation-date" name="creationDate" value={filters.creationDate} onChange={handleInputChange} />
            </div>
          </div>
          
          <div className='d-flex justify-content-end'>
            <button className='btn btn-primary search' onClick={resetFilters}>Reset</button>
            <button className='btn btn-primary search' onClick={() => {window.location = '/artconnect/searchResult'}}>Search</button>
          </div>
        </div>  
     );
}
 
export default CommunityFilter;