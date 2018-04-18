import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './components/Stars.jsx';
import RecentReviewList from './components/RecentReviewList.jsx';
import ReviewList from './components/ReviewList.jsx';
import KeywordList from './components/KeywordList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        product: null,
        reviews: window.sampleData.reviews
    }

    this.getTopReviews = this.getTopReviews.bind(this);
    this.getRecentReviews = this.getRecentReviews.bind(this);
  }

  getTopReviews() {
    //Return the most helpful reviews 
    //To be used in the '.main-reviews' section on the left of the page
    return this.state.reviews.slice(0,10);
  }

  getRecentReviews() {
    //Return the most recent reviews
    //To be used in the '.recent-reviews' section on the right of the page
    return this.state.reviews.slice(0,10);
  }

  render() {
    return (
        <div>
            <h2>Customer Reviews</h2>
            <div className='main-reviews'>
                <Stars numReviews={Math.floor(Math.random() * 1000)}/>
                <KeywordList />
                <ReviewList reviews={this.getTopReviews()} />
            </div>
            <div className='recent-reviews'>
                <RecentReviewList reviews={this.getRecentReviews()} />
            </div>
        </div>
    )   
  }
}
 
ReactDOM.render(React.createElement(App), document.getElementById('app'));

export default App;