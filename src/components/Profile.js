import React from "react";
import styled from "styled-components";


const ProfilePhoto = styled.img`
    width: 15em;
    border-radius: 75px;
`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  
  @media only screen and (max-width: 767px) {
    margin-top: 2em;
  }
`

const ProfileTitle = styled.span`
  font-size: 1.5em;
`

const SocialMedia = styled.div`
  margin-top: 1em;
  display: flex;
`

const SocialMediaIcon = styled.i`
    color: white;
`

export default () => {
    return <ProfileContainer>
        {/*<ProfilePhoto src={"/profile_photo.jpg"} />*/}
        <ProfileTitle>Pedro Mansan</ProfileTitle>
        <SocialMedia>
            <a href={"https://github.com/youboll"} target={"_blank"}>
                <SocialMediaIcon className={"large github icon"}></SocialMediaIcon>
            </a>
        </SocialMedia>
    </ProfileContainer>
}