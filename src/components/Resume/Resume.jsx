import resume from "../../assets/Web_developer_Jr._Eduardo_Trevizo.pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

export default function Resume() {
  return (
    <div className="container_resume">
      <a
        className="button_cv"
        href={resume}
        download="Web_developer_Jr._Eduardo_Trevizo"
      >
        Decargar CV
      </a>
      <div className="resume">
        <embed src={resume} type="application/pdf" className="preview"></embed>
      </div>
      <a
        className="button_cv"
        href={resume}
        download="Web_developer_Jr._Eduardo_Trevizo"
      >
        Decargar CV
      </a>
    </div>
  );
}
