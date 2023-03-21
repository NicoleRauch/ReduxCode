import ajax from "nanoajax";

import {IUser} from "./types";

export const postUser = (user: IUser, callback: (returnCode: number) => void): void => {
  ajax.ajax({
      url: "/api/user",
      method: "POST",
      body: "firstName=" + user.firstName + "&lastName=" + user.lastName
    },
    callback
  );
};

export const fetchUsers = (callback: (response: IUser[]) => void): void => {
  ajax.ajax({
      url: "/api/users",
      method: "GET"
    },
    (_, response) => {
      callback(JSON.parse(response) as IUser[]); // !!
    }
  );
};
