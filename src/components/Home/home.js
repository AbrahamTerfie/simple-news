import React from 'react';

import NewsSlider from '../widgets/news-slider/slider';
import NewsList from '../widgets/NewsList/newslist';
import VideosList from '../widgets/VideosList/videoslist'; 
const Home = () => {
 return (
    <div>
        <NewsSlider
        type ="featured"
        start={0}
        amount={6}
        settings={{
            dots:true
        }}
        />
        <NewsList
        type = "card"
        loadmore ={true}
        start ={3}
        amount={3}/>

        <VideosList
        type="card"
        title={true}
        loadmore={true}
        start={0}
        amount={3}
        />
        </div>
    )
}

export default Home;