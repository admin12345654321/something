import React from 'react'
import './Profile.scss'
import profileImg from '../../img/profile-img.jpg'

import Layout from '../../components/Layout'

const Profile = () => (
  <Layout>
    <article className='profile'>
      <div className='profile__header'>
        <h1>
          <span>Rolf Harris'</span> Profile
        </h1>
      </div>
      <div className='profile__info-wrapper'>
        <div className='profile__info-item'>
          <div className='info-item__img'>
            <img src={profileImg} alt='profile' />
          </div>
          <div className='info-item__icons'>
            <i className='fab fa-linkedin fa-2x'></i>
            <i className='fab fa-google-plus-square fa-2x'></i>
            <i className='fab fa-youtube fa-2x'></i>
          </div>
        </div>
        <div className='profile__info-item'>
          <div className='info-item__info'>
            <h3>Contact Information</h3>
            <div>
              <h5>
                E-Mail: <span>email@email.com</span>
              </h5>
            </div>
          </div>
          <div className='info-item__info'>
            <h3>General Information</h3>
            <div>
              <h5>
                First Name: <span>Rolf</span>
              </h5>
              <h5>
                Last Name: <span>Harris</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </article>
  </Layout>
)

export default Profile
