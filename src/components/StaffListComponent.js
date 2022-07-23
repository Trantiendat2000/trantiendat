import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderStaff({ staff, onClick }) {
  return (
    <Card>
      <Link to={`/staff/${staff.id}`}>
        <Media middle>
          <Media width="100%" object src={staff.image} alt={staff.name} />
          <p className="text-center text-dark">{staff.name}</p>
        </Media>
      </Link>
    </Card>
  );
}

function StaffList(props) {
  console.log(props.staffs);
  const liststaffs = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-lg-2 col-md-4 col-sm-6 mt-5">
        <RenderStaff staff={staff} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staff">Nhân Viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.staffs.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Media className="row">{liststaffs}</Media>
    </div>
  );
}

export default StaffList;
