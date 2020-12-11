import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { BlogContext } from '../../../App'
import classes from './Resources.module.scss'

export default function Resources() {
  const blogs = useContext(BlogContext)

  if (blogs) {
    console.log(blogs)
  }
  return (
    <Container className='my-5 py-5'>
      <h2 className={`mb-5 pb-5 ${classes.heading}`}>Resources</h2>
      {blogs ? (
        <Row>
          <div className='col-md-6'>
            <div className={classes.resourcesImg}>
              <img
                className='img-fluid'
                src={blogs[1].fields.heroImage.fields.file.url}
                alt='resourcesImage'
              />
              <div className='overlay'>
                <p>{blogs[1].fields.title}</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 '>
            <Row>
              <div className='col-md-12'>
                <div className={classes.resourcesImg}>
                  <img
                    style={{ height: '220px', width: '100%' }}
                    className='img-fluid'
                    src={blogs[0].fields.heroImage.fields.file.url}
                    alt='resourcesImage'
                  />
                  <div className='overlay'>
                    <p>{blogs[1].fields.title}</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className={classes.resourcesImg}>
                  <img
                    className='img-fluid'
                    src={blogs[2].fields.heroImage.fields.file.url}
                    alt='resourcesImage'
                  />
                  <div className='overlay'>
                    <p>{blogs[1].fields.title}</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className={classes.resourcesImg}>
                  <img
                    className='img-fluid'
                    src={blogs[3].fields.heroImage.fields.file.url}
                    alt='resourcesImage'
                  />
                  <div className='overlay'>
                    <p>{blogs[1].fields.title}</p>
                  </div>
                </div>
              </div>
            </Row>
          </div>
          <div className='col-md-12 py-5 my-3 d-flex align-items-center justify-content-end'>
            <button className={classes.articleBtn}>View All Arcticles</button>
          </div>
        </Row>
      ) : null}
    </Container>
  )
}
