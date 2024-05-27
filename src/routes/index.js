const PATH = {
  OVERVIEW: "/",
  ARTICLEDETAIL: "ARTICLEDETAIL",
  NEWS: "/news",
};
const paths = [
  {
    name: PATH.OVERVIEW,
    path: "/",
    src: "/",
  },
  {
    name: PATH.ARTICLEDETAIL,
    path: "/:slug",
    src: "/:slug",
  },
  {
    name: PATH.NEWS,
    path: "/news",
    src: "/news",
  },
];
const routes = paths.map((path) => {
  return {
    source: path.path,
    destination: path.src,
  };
});
module.exports = {
  PATH,
  paths,
  routes,
};
