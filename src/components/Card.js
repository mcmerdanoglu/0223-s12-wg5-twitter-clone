


export default function Card() {

    const tweet = {
        avatar: null,
        authorname: 'John Doe',
        authorid: '@johndoe',
        time: '2h',
        text: 'Lorem ipsum dolor sit amet',
        replies: 0,
        retweets: 0,
        likes: 0
    };

    return (
        <div className="card">
            <img className='avatar' src= {tweet.avatar} alt="avatar" />
            <div className="content">
                <div className="header">
                    <span className="fullname">{tweet.authorname}</span>
                    <span className="username">{tweet.authorid}</span>
                    <span className="timestamp">- {tweet.time}</span>
                </div>
                <div className="body">
                    <span>{tweet.text}</span>
                </div>
                <div className="footer">
                    <i className="fa fa-comment"></i><span>{tweet.replies}</span>
                    <i className="fa fa-retweet"></i><span>{tweet.retweets}</span>
                    <i className="fa fa-heart"></i><span>{tweet.likes}</span>
                    </div>
            </div>
        </div>    
    )



    }
