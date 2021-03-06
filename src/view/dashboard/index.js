import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { getMainUrl, getTaskByDateUrl } from "../../constants/routes/routes";
import Main from "./main/main";
import TaskForDate from "./tasksForDate/tasksForDate";

const Dashboard = (props) => {
  return (
    <Switch>
      <Route path={getMainUrl()} component={Main} />
      
      <Route path={getTaskByDateUrl()} component={TaskForDate} />
      <Redirect to={getMainUrl()} />
    </Switch>
  );
};

export default Dashboard;
