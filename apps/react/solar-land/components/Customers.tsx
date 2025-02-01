import React from "react";
import {
  CustomersHeader,
  CustomersIcon,
  CustomersIcons,
  CustomersList,
  CustomersText,
  CustomersTitle,
  Img,
  Span,
} from "../layout/Customers.Style";

import WeprodevLogo from "../images/weprodev-logo.png";
import Logo2 from "../images/logo-2.png";
import Logo3 from "../images/logo-3.png";
import Logo4 from "../images/logo-4.png";
import Logo5 from "../images/logo-5.png";
import Logo6 from "../images/logo-6.png";

const Customers: React.FC = () => {
  return (
    <CustomersList className="container">
      <CustomersHeader>
        <CustomersTitle>
          Focusing on quality, <Span> we maintain customer trust</Span>
        </CustomersTitle>

        <CustomersText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          optio esse totam, sed excepturi magni est voluptates dignissimos modi
          beatae ipsa obcaecati molestias nihil numquam cum magnam mollitia
          voluptatibus. Facere.
        </CustomersText>
      </CustomersHeader>

      <CustomersIcons>
        <CustomersIcon>
          <Img src={WeprodevLogo} alt="Customer Icon" />
        </CustomersIcon>

        <CustomersIcon>
          <Img src={Logo2} alt="Customer Icon" />
        </CustomersIcon>

        <CustomersIcon>
          <Img src={Logo3} alt="Customer Icon" />
        </CustomersIcon>

        <CustomersIcon>
          <Img src={Logo4} alt="Customer Icon" />
        </CustomersIcon>

        <CustomersIcon>
          <Img src={Logo5} alt="Customer Icon" />
        </CustomersIcon>

        <CustomersIcon>
          <Img src={Logo6} alt="Customer Icon" />
        </CustomersIcon>
      </CustomersIcons>
    </CustomersList>
  );
};

export default Customers;
