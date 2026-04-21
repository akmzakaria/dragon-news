import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  //   console.log(news);

  useEffect(() => {
    const newsDetails = data.find((news) => news.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div className="max-w-[1000px] mx-auto w-full px-3 md:px-0">
      <header className="py-3">
        <Header></Header>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5 mt-5">
        <section className="col-span-1 md:col-span-9">
          <h2 className="font-bold mb-4 md:mb-5 text-base md:text-lg">News Details</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>

        {/* Right Sidebar - Hidden on mobile, visible on md and above */}
        <aside className="hidden md:block md:col-span-3 sticky overflow-y-auto self-start top-0 h-screen">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
