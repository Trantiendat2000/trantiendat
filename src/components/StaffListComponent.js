import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import dateFormat, { masks } from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
      column: "col-12 col-md-6 col-lg-4 mt-3",
    };
  }

  //  set state khi click staff
  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  //  set state khi click colum
  onColumSelect(col) {
    this.setState({ column: col });
  }

  // render ds staff khi click
  renderStaff(staff) {
    if (staff != null) {
      return (
        <div className="col-12">
          <Card>
            <CardImg width="100%" object src={staff.image} alt={staff.name} />
            <CardBody>
              <CardTitle>Họ và Tên: {staff.name}</CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
              </CardText>
              <CardText>Phòng ban: {staff.department.name}</CardText>
              <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
              <CardText>Số ngày đã làm thêm: {staff.overtime}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  // render danh sach staff
  render() {
    const staff = this.props.staffs.map((staff) => {
      return (
        <div className={this.state.column}>
          <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row mt-3">
          <button
            onClick={() => this.onColumSelect("col-md-2 mt-3")}
            className="btn btn-success ml-3"
          >
            6 columns
          </button>
          <button
            onClick={() => this.onColumSelect("col-md-4 mt-3")}
            className="btn btn-primary ml-3"
          >
            3 columns
          </button>
          <button
            onClick={() => this.onColumSelect("col-md-6 mt-3")}
            className="btn btn-warning ml-3"
          >
            2 columns
          </button>
          <button
            onClick={() => this.onColumSelect("col-md-12 mt-3")}
            className="btn btn-danger ml-3"
          >
            1 columns
          </button>
        </div>
        <div className="row">{staff}</div>
        <div className="row">{this.renderStaff(this.state.selectedStaff)}</div>
      </div>
    );
  }
}
export default StaffList;
