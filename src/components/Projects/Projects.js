import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import image from "../../Assets/Projects/image.png";
import chatter from "../../Assets/Projects/chatter.png";
// import suicide from "../../Assets/Projects/suicide.png";
import majestic from "../../Assets/Projects/majestic.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatter}
              isBlog={false}
              title="Chatter"
              description="A full-stack social media platform inspired by Twitter. It features user authentication, real-time feeds, and full CRUD operations for posts."
              ghLink="https://github.com/samson-16/Twitter"
              demoLink="https://chatter-tfxk.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={majestic}
              isBlog={false}
              title="Majestic Academy"
              description="A platform that improves communication between parents and teachers through a responsive web app.
Tech Stack: React.js, Django, Tailwind CSS"
              ghLink="https://github.com/samson-16/smartethioparent"
              demoLink="https://smartethioparent.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Tenancy Management system"
              description="A web app built to manage rental agreements based on Ethiopia’s new rental laws. Features include role-based access, user registration, document upload, and automatic contract generation.
Tech Stack: React, Django, PostgreSQL"
              ghLink="https://github.com/Kefita-Technology-PLC/ForntEnd_Tenure_Tenant"
              demoLink="https://front-end-tenants.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/samson-16/plant_diseases_prediction"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
