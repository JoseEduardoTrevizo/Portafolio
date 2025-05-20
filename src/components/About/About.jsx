import React from "react";
import imgabout from "../../Images/about.png";
import Skills from "../Skills/Skills";

export default function About() {
  return (
    <>
      <section className="about">
        <div className="about__container">
          <div className="container__aboutme">
            <h2 className="about__title">Sobre Mi</h2>
            <p className="about__text">
              Hola a todos, soy Eduardo Trevizo de Chihuahua, Mexico. Soy
              Ingeniero Mecatronico con gusto por la programacion, ademas de mi
              formacion en ingenieria me forme como desarrollador Web de la mano
              de TripleTen.
            </p>
            <p className="about__text">
              Ademas de la programacion me gusta realizar otras actividades:
              Montar en Bicicleta, leer en mis ratos libres y gusto por la
              Historia
            </p>
          </div>
          <img src={imgabout} className="about__image" />
        </div>

        <h2 className="skill__title">Habilidades Profesionales</h2>
        <Skills />
      </section>
    </>
  );
}
