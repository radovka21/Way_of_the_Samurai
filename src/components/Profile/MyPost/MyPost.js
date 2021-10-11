import React from 'react'
import Post from './Post/Post'
import style from './MyPost.module.css'

const MyPost = () => {
    return (
        <>
            <div className={style.profile__post}>
                <h1 className={style.profile__post_title}>
                    Мои пости
                </h1>
                <textarea className={style.profile__post__textarea}></textarea>
                <div className={style.profile__post_box}>
                    <button className={style.profile__post_btn}>submit</button>
                    <button className={style.profile__post_btn}>reset</button>
                </div>
                <Post message={'Bogdan'} likes={1}/>
                <Post message={'Vasia'} likes={2}/>
                <Post message={'Vlad'} likes={3}/>
            </div>
        </>
    );
};

export default MyPost;