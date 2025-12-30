import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="py-20 bg-white">
      <Helmet>
        <title>Blog - Petura.shop</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600">
          Artículos y consejos para cuidar a tu mascota.
        </p>
      </div>
    </div>
  );
};

export default Blog;
