import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Navigation, Pagination,Autoplay,FreeMode } from 'swiper/modules';
import COURSE_CARD from './Course_Card'

const CourseSlider = ({Courses}) => {
  return (
    <>
        {
            Courses?.length ? (
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={30}
                    pagination={true}
                    modules={[Autoplay,Pagination,Navigation,FreeMode]}
                    className="mySwiper"
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }}
                    navigation={true}
                    breakpoints={{
                        1024:{slidesPerView:3,}
                    }}
                >
                    {
                        Courses?.map((course, index)=> (
                            <SwiperSlide key={index}>
                                <COURSE_CARD course={course} Height={"h-[250px]"} />
                            </SwiperSlide>
                        ))
                    }   
                </Swiper>
            ) : (
                <p className="text-xl text-richblack-5">No Course Found</p>
            )

        }
    </>
  )
}

export default CourseSlider
