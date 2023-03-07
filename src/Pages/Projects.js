import React from 'react';
import {Route, Routes } from 'react-router-dom';
import projectData from "../components/Cards/project.json";
import CardWrapper from '../components/CardWrapper/index';
import Card from '../components/Cards';


function Projects() {
  return (
    <div>
      <div data-new-gr-c-s-check-loaded="14.1098.0" data-gr-ext-installed="">
        <div>
          <section className="py-5 text-center container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Album example</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
              </div>
            </div>
          </section>
          <div className="album py-5 bg-light">
            <div className="container">
              <div>
                <Routes>
                  <Route path="CardWrapper" element={<CardWrapper />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    {projectData.map(project => <Card {...project}/>)}
    </div>
  );
}


export default Projects
