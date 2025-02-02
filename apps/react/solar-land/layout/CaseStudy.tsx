import React from "react";
import {
  CaseStudyAuthor,
  CaseStudyAuthorSpan,
  CaseStudyButton,
  CaseStudyCard,
  CaseStudyHeaderTitle,
  CaseStudyImg,
  CaseStudyInfo,
  CaseStudyList,
  CaseStudyText,
  CaseStudyTitle,
  Img,
  Span,
} from "./CaseStudy.Style";

import ImgSrc from "../images/case-study-1.jpg";

const CaseStudy: React.FC = () => {
  return (
    <CaseStudyList className="container">
      <div>
        <CaseStudyHeaderTitle className="quicksand-bold">
          See how we solve problems, <Span>right on target</Span>
        </CaseStudyHeaderTitle>
      </div>

      <CaseStudyCard>
        <CaseStudyInfo>
          <CaseStudyTitle>Medtronic</CaseStudyTitle>
          <CaseStudyText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non autem
            alias ab officia maiores voluptates tempore eaque vel veritatis,
            accusamus incidunt at perspiciatis pariatur neque! Illo ullam ea
            illum unde?
          </CaseStudyText>

          <CaseStudyButton>View case study</CaseStudyButton>

          <CaseStudyAuthor>
            jeniffer koloba -
            <CaseStudyAuthorSpan> CEO EG Mecha </CaseStudyAuthorSpan>
          </CaseStudyAuthor>
        </CaseStudyInfo>

        <CaseStudyImg>
          <Img src={ImgSrc} alt="case study 1" />
        </CaseStudyImg>
      </CaseStudyCard>
    </CaseStudyList>
  );
};

export default CaseStudy;
