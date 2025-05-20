import React from "react";
import "../../blocks/About.css";
import Avatar from "../../Images/avatar.png";

export default function Home() {
  return (
    <div className="about__me">
      <div className="my__selff">
        <div className="my__selff_container">
          <h2 className="my__selff_title">Deja Presentarme</h2>
          <p className="my__selff_text">
            Me enamore de la programacion y almenos he aprendido algo... en
            HTML, CSS y JavaScript. Mi campo de interes es en la construccion de
            nuevas tecnologias y de productos web.
          </p>
          <p className="my__selff_text">
            Sigo desarrollando mis habilidades en programcion utilizando
            herramientas como React y un poco de Node.js. Ademas tengo un gusto
            por la filosofia especialmente en el Estoicismo y trato de aplicarla
            a mi dia a dia.
          </p>
        </div>
        <img src={Avatar} alt="Avatar" className="avatar" />
        <p className="quote">
          "El progreso no se alcanza por suerte o accidente, sino trabajando en
          ti mismo diariamente"
          <span className="quote__header">~ Epicteto</span>
        </p>
      </div>
    </div>
  );
}
