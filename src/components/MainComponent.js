import React, { Component, useState } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Department from "./Department";
import Salary from "./Salary";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { Switch, Route } from "react-router-dom";
import { render } from "react-dom";

function Main() {
  const [staff, staffslist] = useState({
    staffs: STAFFS,
    departments: DEPARTMENTS,
  });

  const StaffWitdhId = ({ match }) => {
    return (
      <StaffDetail
        staffs={
          staff.staffs.filter(
            (staff) => staff.id === parseInt(match.params.staffId, 10)
          )[0]
        }
      />
    );
  };

  return (
    <div>
      <Header />
      <div className="row">
        <br />
      </div>
      <Switch>
        <Route
          exact
          path="/staff"
          component={() => <StaffList staffs={staff.staffs} />}
        />
        <Route path="/staff/:staffId" component={StaffWitdhId} />
        <Route
          path="/dept"
          component={() => <Department dept={staff.departments} />}
        />
        <Route
          path="/salary"
          component={() => <Salary salary={staff.staffs} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
