import React from "react"
import styled from "styled-components"

const ProjectWithUs = () => {
  return (
    <ProjectWrapper styles={{ padding: "1rem" }}>
      <div>
        <iframe
          src="https://snapwidget.com/embed/824386"
          class="snapwidget-widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          border="none"
          overflow="hidden"
          width="1500px"
          height="200px"
        ></iframe>
      </div>
    </ProjectWrapper>
  )
}

const ProjectWrapper = styled.section`
  background: white;
  color: var(--mainWhite);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  .project_phones {
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      color: var(--mainWhite);
      border: 2px solid var(--mainWhite);
      padding: 1rem;
      text-align: center;
      border-radius: 2rem;
      width: 150px;
      margin-top: 1rem;
      transition: var(--mainTransition);

      &:hover {
        background: var(--mainWhite);
        color: var(--primaryColor);
        transform: scale(1.1);
      }
    }
  }

  @media (min-width: 760px) {
    flex-direction: row;
  }
`

export default ProjectWithUs
