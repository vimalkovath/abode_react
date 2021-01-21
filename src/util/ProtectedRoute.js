import React from "react";
import { Redirect } from "@reach/router";
import { AppHeader } from "../components/AppHeader/AppHeader";
import { useStore } from "effector-react";
import { $userProfile } from "../store/store";

export const ProtectedRoute = ({ as: Comp, role, ...props }) => {


    const  user = true;


  return user ? (
    <>
      <AppHeader>
        <Comp {...props} />
      </AppHeader>
    </>
  ) : (
    <Redirect noThrow to={"/login"} />
  );
};
