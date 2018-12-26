import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommendDetail from './components/comment_detail';



const App =() => {
    return (

        <div className="ui container comments" >
            <CommendDetail 
            author="Sam" 
            timeAgo="Today at 4:45AM" 
            img={faker.image.avatar()} 
            postText="Nice"
            />
            <CommendDetail 
            author="Alex" 
            timeAgo="Today at 2:00PM" 
            img={faker.image.avatar()} 
            postText="Good"
            />
            <CommendDetail 
            author="Jane" 
            timeAgo="Yesterday at 5:30PM" 
            img={faker.image.avatar()} 
            postText="It is oooo" 
            />
            
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
