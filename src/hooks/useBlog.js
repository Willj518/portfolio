import { useEffect, useState } from 'react';
import { contactsData } from '../data/contactsData';

function UseBlog() {
  const [blogs, setBlogs] = useState([]);
  const { devUsername } = contactsData;

  useEffect(() => {
    // fetch(`https://dev.to/api/articles?username=${devUsername}`)
    // fetch(`https://raw.githubusercontent.com/Willj518/resources/main/articles/article_1.md`)
    fetch(`/Volumes/api/articles?username=${devUsername}`)
      .then((response) => response.json())
      .then(data => {
        const filtered = data.sort(() => Math.random() - 0.5);
        setBlogs(filtered)
      })
  }, [devUsername]);

  return { blogs };
};

export default UseBlog;