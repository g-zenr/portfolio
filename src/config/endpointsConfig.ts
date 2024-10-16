const API_ENDPOINTS = {
  MAIN: {
    DEFAULT: "/api",
  },

  USER: {
    LOGIN: "/user/login",
    REGISTER: "/user/register",
    ALL: "/user/get/all",
    SINGLE: "/user/get/:id",
    UPDATE: "/user/update/:id",
    DELETE: "/user/delete/:id",
    SEARCH: "/user/search",
    CURRENT: "/user/current",
  },
};

export default { API_ENDPOINTS };
