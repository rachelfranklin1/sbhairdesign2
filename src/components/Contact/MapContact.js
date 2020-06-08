import React from "react"
import Title from "../Title"
import styled from "styled-components"

const MapContact = () => {
  return (
    <section>
      <Title title="Find the salon" />
      <MapWrapper>
        <iframe
          title="change-maps"
          frameBorder="0"
          width="100%"
          height="250px"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBB5OIE9jfuIw7YXQJRd0Bxw7a9DgUMRjA&q=place_id:ChIJn6g_HiWXd0gR775iZ2wH_iE"
          aria-label="Via oriani 22 Cervia"
        ></iframe>
      </MapWrapper>
    </section>
  )
}

const MapWrapper = styled.div`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  &:hover {
    box-shadow: var(--darkShadow);
  }
`

export default MapContact
