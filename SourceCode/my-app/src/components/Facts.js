import React, { Component } from 'react';
import '../App.css';
import youtube from '../youtubeApi/youtube'
import VideoDetail from "../youtubeApi/VideoDetail";


class Facts extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit("contract mangment");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

    render(){
  return (



<section id="facts" className="wow fadeIn">
  <div className="container">
    <header className="section-header">
      <h3>Facts</h3>
      <p>Alot of customers and more users trust CONTRACT with their critical and essential agreements.</p>
    </header>
    {/* <div className="row counters">
      <div className="col-lg-4 col-6 text-center">
        <span data-toggle="counter-up">274</span>
        <p>Clients</p>
      </div>
      <div className="col-lg-4 col-6 text-center">
        <span data-toggle="counter-up">421</span>
        <p>Contracts</p>
      </div>
      <div className="col-lg-4 col-6 text-center">
        <span data-toggle="counter-up">1,364</span>
        <p>Developers</p>
      </div>
    
    </div> */}
    {/* <div className="facts-img">
      <img src="img/facts-img.png" alt className="img-fluid" />
    </div> */}




            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
 




  </div>
</section>

    )
}
}

export default Facts;