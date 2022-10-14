import React, { useMemo } from "react"
import { BsInstagram } from "react-icons/bs"
import { AiFillGithub, AiFillLinkedin, AiFillDribbbleCircle } from "react-icons/ai"


const SocialMedia = () => {
  const links = {
    linkedin: "https://www.linkedin.com/in/basqui",
    dribbble: "https://dribbble.com/Basqui",
    instagram: "https://www.instagram.com/johndkoder.js",
    github: "https://github.com/John-Daniels",
  }

  const socialMediaHandles = useMemo(
    () => [
      {
        url: "https://github.com/basquii",
        icon: <AiFillGithub />,
        name: "github",
      },
      {
        url: "https://www.linkedin.com/in/basqui/",
        icon: <AiFillLinkedin />,
        name: "linkedin",
      },

      {
        url: "https://dribbble.com/Basqui",
        icon: <AiFillDribbbleCircle />,
        name: "dribbble",
      },

      {
        url: "https://www.instagram.com/basqui_studio/",
        icon: <BsInstagram />,
        name: "instagram",
      },
    ],
    []
  )

  return (
    <div className='app__social'>
      {socialMediaHandles.map((social, index) => (
        <SocialIcon handle={social} key={index} />
      ))}
    </div>
  )
}

const SocialIcon = ({ handle }) => {
  const { url, icon, name } = handle

  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <div>{icon}</div>
    </a>
  )
}

export default SocialMedia
