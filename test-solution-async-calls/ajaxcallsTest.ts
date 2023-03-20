import { postUser, fetchUsers } from "../src-solution-async-calls/ajaxcalls";
import sinon, {SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic} from "sinon";

import {IUser} from "../src-solution-async-calls/types";

declare const global: {XMLHttpRequest ?: SinonFakeXMLHttpRequestStatic};

const user: IUser = {
  firstName: "firstName",
    lastName: "lastName"
};

describe("validateInBackend", () => {
  let requests: SinonFakeXMLHttpRequest[];

  beforeEach(() => {
    requests = [];
    global.XMLHttpRequest = sinon.FakeXMLHttpRequest;
    global.XMLHttpRequest.onCreate = (request): void => {
      requests.push(request);
    };
  });

  afterEach(() => {
    delete global.XMLHttpRequest;
  });

  describe("postUser", () => {
    it("submits user data to the backend", () => {
      postUser(user, jest.fn());

      expect(requests.length).toEqual(1);
      expect(requests[0].url).toEqual("/api/user");
      expect(requests[0].method).toEqual("POST");
    });

    it("passes the result code to the callback", done => {
      postUser(user, data => {
        expect(data).toEqual(200);
        done();
      });

      requests[0].respond(200, { "Content-Type": "application/json" }, "");
    });
  });

  describe("fetchUsers", () => {
    it("makes request to the backend", () => {
      fetchUsers(jest.fn());

      expect(requests.length).toEqual(1);
      expect(requests[0].url).toEqual("/api/users");
      expect(requests[0].method).toEqual("GET");
    });

    it("passes the retrieved data to the callback", done => {
      fetchUsers(data => {
        expect(data).toEqual({somedata: true});
        done();
      });

      requests[0].respond(200, {"Content-Type": "application/json" }, `{ "somedata": true }`);
    });

  });
});
