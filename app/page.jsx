import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="" />
        <span className="orange_gradient text-center">
          AI-Powered Meal Based System
        </span>
      </h1>
      <p>MealMentor is an open source AI prompting tool for modern world</p>
      <Feed />
    </section>
  );
};

export default Home;
