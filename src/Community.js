import React from 'react';
import CommunityCategory from './components/CommunityCategory'
import Search from './components/Search'
const Community = () => {
    return (
        <div className='community'>
            <div className="fixed-top" style={{ marginLeft: '1rem', marginTop: '105px', marginBottom: '100px' }}>
                <Search page='Community' />
            </div>

            <div style={{ marginTop: '20px', marginBottom: '40px', padding: '30px' }}>
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
                <CommunityCategory category="Community" />
            </div>
        </div>
    );
}

export default Community;