import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ mySelectedSong }) => {
  // console.log(props);
  if (!mySelectedSong) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details:</h3>
      <br />
      <p>Title: {mySelectedSong.title}</p>
      <br />
      <p>Duration:{mySelectedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
