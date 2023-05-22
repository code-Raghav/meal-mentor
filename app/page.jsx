import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="" />
        <span className="orange_gradient text-center">AI-Powered Recipes</span>
      </h1>
      <p>
        MealMentor is an AI assisted meal plannning program for modern world
      </p>
      <Feed />
    </section>
  );
};

export default Home;
