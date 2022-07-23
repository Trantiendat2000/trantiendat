import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat, { masks } from "dateformat";

function StaffDetail(props) {
  console.log(props.staffs);
  if (props.staffs != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/staff">Staff</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staffs.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.staffs.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish staff={props.staffs} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderDish({ staff }) {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-3">
          <CardImg width="100%" src={staff.image} alt="staff.name" />
        </div>
        <div className="col-9">
          <CardBody>
            <CardTitle>Họ và tên: {staff.name}</CardTitle>
            <CardText>
              Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
            </CardText>
            <CardText>
              Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
            </CardText>
            <CardText>Phòng ban: {staff.department.name}</CardText>
            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
          </CardBody>
        </div>
      </div>
    </div>
  );
}
export default StaffDetail;
