import React from "react";
import {
  FirstContainer,
  InfoContainer,
  Title,
  CertificatesContainer,
  CertificateCard,
  Icon,
} from "./styled";
import { FiExternalLink } from "react-icons/fi";

export default function Certificates() {
  return (
    <FirstContainer id="certificates">
      <InfoContainer>
        <Title>Certificates</Title>
        <CertificatesContainer>
          <CertificateCard
            href="https://certificates.soyhenry.com/cert?id=85e3f56c-c457-4b39-a400-2f20d347c5d7"
            target="_blank"
          >
            HENRY - Full Stack Web Development{" "}
            <FiExternalLink style={{ width: "30px", margin: "5px" }} />
          </CertificateCard>
          <CertificateCard
            href="https://www.freecodecamp.org/certification/Thiago-DAlessandro/front-end-development-libraries"
            target="_blank"
          >
            FreeCodeCamp - Front End Libraries{" "}
            <FiExternalLink style={{ width: "30px", margin: "5px" }} />
          </CertificateCard>
          <CertificateCard
            href="https://www.efset.org/cert/wFFfR5"
            target="_blank"
          >
            EF Set - English (C2){" "}
            <FiExternalLink style={{ width: "30px", margin: "5px" }} />
          </CertificateCard>
        </CertificatesContainer>
      </InfoContainer>
    </FirstContainer>
  );
}
