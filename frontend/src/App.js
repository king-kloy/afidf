import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import dashboard from "./components/pages/cms/dashboard";
import gallery from "./components/pages/gallery";
import pages from "./components/pages/cms/pages";
import posts from "./components/pages/cms/posts";
import Edit from "./components/pages/cms/Edit";
import create from "./components/pages/cms/Create";
import BlogList from "./components/pages/blogs/BlogList";
import BlogDetails from "./components/pages/blogs/BlogDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Documentaries from "./components/pages/Documentaries";

function App() {
  return (
    <BrowserRouter>
      <Route component={navbar} />
      <Route path="/documentaries" component={Documentaries} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/gallery" component={gallery} />
        <Route path="/blog" component={BlogList} />
        <Route path="/post/:id" component={BlogDetails} />
        <Route path="/dashboard" component={dashboard} />
        <Route path="/pages" component={pages} />
        <Route path="/posts" component={posts} />
        <Route path="/create" component={create} />
        <Route path="/edit" component={Edit} />
      </Switch>
      <Route component={Footer} />
    </BrowserRouter>
  );
}

export default App;
