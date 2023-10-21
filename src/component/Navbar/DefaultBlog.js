import React from 'react'
import { Link } from 'react-router-dom'

export default function DefaultBlog() {
  return (
      <>
          <div>
              <h2 data-aos="fade-down" className="text-center  mt-3">
                  <i className="fa-sharp fa-solid fa-blog me-1"></i> Blogs
              </h2>
              <div
                  data-aos="fade-down"
                  className="  text-decoration-underline mb-4 mx-auto"
              ></div>
          </div>
          <h3 data-aos="fade-down" className="text-center my-4">
              {" "}
              Whoa!! No Blog??{" "}
          </h3>
          <div className="container   my-5 shade rounded py-5 text border bg-white border-gray-400">
              <h5 className='text-center col-12' style={{ color: 'black' }}>Are you considering the idea of writing a blog? Why not take advantage of our platform to share your creativity with thousands of aspiring individuals?</h5>
              <div className='text-center mt-4'>
                  <Link to='/addblog'>
                      <button className="myButton testBtn"><h6 className='mb-0 pb-0'>Start your Blog Now!</h6></button>
                  </Link>
              </div>
          </div>
      </>
  )
}
