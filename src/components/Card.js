


export default function Card({tweets}) {

    

    return (
        <div className="card">
            <img className='avatar' src= {tweets.avatar} alt="avatar" />
            <div className="content">
                <div className="header">
                    <span className="fullname">{tweets.authorname}</span>
                    <span className="username">{tweets.authorid}</span>
                    <span className="timestamp">- {tweets.time}</span>
                </div>
                <div className="body">
                    <span>{tweets.body}</span>
                </div>
                <div className="footer">
                    <i className="fa fa-comment"></i><span>{tweets.replies}</span>
                    <i className="fa fa-retweet"></i><span>{tweets.retweets}</span>
                    <i className="fa fa-heart"></i><span>{tweets.likes}</span>
                    </div>
            </div>
        </div>    
    )



    }
