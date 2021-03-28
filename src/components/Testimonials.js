import React from 'react'
import styled from "styled-components"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TopLine>
        Testimonials
      </TopLine>
      <Description>
        What People are Saying
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline />
            <h3>Sean Michaels</h3>
            <p> "The greatest experience of my life! It was so much fun exploring the mountains and they made it super easy to book my trip and accommodation."</p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb />
            <h3>Sarah Kin</h3>
            <p> "It was so easy to set up my trip! They answered all my questions right away and gave me the best price out of all the companies I researched."</p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
        image
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

const TopLine = styled.div`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`