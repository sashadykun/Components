import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommendDetail from './components/comment_detail';
import ApprovalCard from './components/approval_card';



const App =() => {
    return (

        <div className="ui container comments" >
            <ApprovalCard>
                <CommendDetail 
                author="Sam" 
                timeAgo="Today at 4:45AM" 
                img={faker.image.avatar()} 
                postText="Nice"
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommendDetail 
                author="Alex" 
                timeAgo="Today at 2:00PM" 
                img={faker.image.avatar()} 
                postText="Good"
                />
            </ApprovalCard>
           
            <ApprovalCard>
                <CommendDetail 
                author="Jane" 
                timeAgo="Yesterday at 5:30PM" 
                img={faker.image.avatar()} 
                postText="It is oooo" 
                />
            </ApprovalCard>
            
            
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
