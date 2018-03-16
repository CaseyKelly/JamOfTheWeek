import React from 'react';
import AppBar from 'material-ui/AppBar';
import MusicNote from 'material-ui/svg-icons/image/music-note';
import SetlistFinder from './components/SetlistFinder';
import LatestShows from './components/LatestShows';

const App = () => {
  const styles = {
    logo: {
      paddingTop: '10',
      color: 'white'
    }
  };

  return (
    <div>
      <AppBar
        title="Jam of the Week"
        iconElementLeft={<MusicNote hoverColor="red" style={styles.logo} />}
      />
      <SetlistFinder />
      <LatestShows />
    </div>
  );
};

export default App;
